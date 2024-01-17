
import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

const MycustomModule =  {
    namespaced: true,
    actions, 
    getters, 
    mutations
}

export default MycustomModule