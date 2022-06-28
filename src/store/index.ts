import { createStore } from "vuex";
import invoicesData from "../api/invoices.json";
import { calculateBalance } from "../utils/calculateBalance";

interface Invoice {
  amount: number;
  invoiceId: number;
  issueDate: string;
  issuerId: number;
  paymentDate: string;
  receiverId: number;
}

export default createStore({
  state: {
    invoices: [],
    companyId: 0,
    initialDate: "",
    endDate: "",
  },
  getters: {
    getBalanceForSevenDays({ invoices, companyId, initialDate }) {
      return calculateBalance(invoices, companyId, initialDate, 7);
    },
    getBalanceForFourteenDays({ invoices, companyId, initialDate }) {
      return calculateBalance(invoices, companyId, initialDate, 14);
    },
    getBalanceForThirtyDays({ invoices, companyId, initialDate }) {
      return calculateBalance(invoices, companyId, initialDate, 30);
    },
    getTopTenClients({ invoices, companyId, initialDate, endDate }) {
      const iDate = new Date(initialDate).getTime();
      const eDate = new Date(endDate).getTime();
      const clients: Invoice[] = [];
      invoices.forEach((invoice: Invoice) => {
        const invoiceDate = new Date(invoice.paymentDate).getTime();
        if (
          invoice.issuerId === companyId &&
          iDate <= invoiceDate &&
          eDate >= invoiceDate
        ) {
          clients.push(invoice);
        }
      });
      const clientsId = clients
        .map((item: Invoice) => item.receiverId)
        .filter((value, index, self) => self.indexOf(value) === index);
      const newClientsData = [];
      for (const id of clientsId) {
        let invoicesByClient = [];
        for (const client of clients) {
          if (id === client.receiverId) invoicesByClient.push(client);
        }
        newClientsData.push(invoicesByClient);
        invoicesByClient = [];
      }
      let dataTable = [];
      for (const client of newClientsData) {
        let clientId = client[0].receiverId;
        let totalAmount = 0;
        let numberInvoices = client.length;
        let averageSale = 0;
        for (const data of client) {
          totalAmount += data.amount;
        }
        averageSale = totalAmount / numberInvoices;
        dataTable.push({
          clientId,
          totalAmount,
          numberInvoices,
          averageSale,
        });
        clientId = 0;
        numberInvoices = 0;
      }
      dataTable.sort((a, b) => {
        return b.totalAmount - a.totalAmount
      })
      dataTable = dataTable.slice(0, 10)
      return dataTable;
    },
  },
  mutations: {
    updateInvoices(state, payload) {
      state.invoices = payload;
    },
    updateCompanyId(state, payload) {
      state.companyId = payload;
    },
    updateInitialDate(state, payload) {
      state.initialDate = payload;
    },
    updateEndDate(state, payload) {
      state.endDate = payload;
    },
  },
  actions: {
    loadAllInvoices({ commit }) {
      commit("updateInvoices", invoicesData);
    },
  },
  modules: {},
});
