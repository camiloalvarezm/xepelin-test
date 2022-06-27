import { GetterTree } from 'vuex';
import { InvoicesState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<InvoicesState, StateInterface> = {
    someGetter( /* state */ ) {
        // return true;
    }
}



export default getters;