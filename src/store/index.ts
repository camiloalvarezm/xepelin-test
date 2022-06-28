import { createStore } from "vuex";
import invoicesData from "../api/invoices.json";

// interface Invoice {
//   amount: number;
//   invoiceId: number;
//   issueDate: Date;
//   issuerId: number;
//   paymentDate: Date;
//   receiverId: number;
// }

export default createStore({
  state: {
    invoices: [],
    businessId: 0,
  },
  getters: {
    getBalanceForSevenDays(state) {
      return state.invoices[0] 
    },
    getBalanceForFourteenDays(state) {
      return state.businessId + 1 
    },
    getBalanceForThirtyDays(state) {
      return state.businessId + 1 
    },
  },
  mutations: {
    updateInvoices(state, payload) {
      state.invoices = payload;
    },
    updateBusinessId(state, payload) {
      state.businessId = payload;
    },
  },
  actions: {
    loadAllInvoices({ commit }) {
      commit("updateInvoices", invoicesData);
    },
  },
  modules: {},
});
