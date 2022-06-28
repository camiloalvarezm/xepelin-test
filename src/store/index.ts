import { createStore } from "vuex";
import invoicesData from "../api/invoices.json";
import { getDaysBetween } from "../utils/getDaysBetween";
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
    companyId: null,
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
