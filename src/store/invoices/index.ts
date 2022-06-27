import { Module } from 'vuex';
import { StateInterface } from '../index';

import state, { InvoicesState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const companyModule: Module<InvoicesState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default companyModule;