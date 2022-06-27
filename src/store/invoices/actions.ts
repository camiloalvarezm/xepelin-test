import { ActionTree } from 'vuex';
import { InvoicesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<InvoicesState, StateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    }
}



export default actions;