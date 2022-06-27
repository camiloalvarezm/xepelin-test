import { createStore } from "vuex";

// My custom modules
import invoicesModule from "./invoices";
import { InvoicesState } from "./invoices/state";

export interface StateInterface {
  invoices: InvoicesState;
}

export default createStore<StateInterface>({
  modules: {
    invoices: invoicesModule,
  },
});
