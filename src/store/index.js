import Vue from 'vue'
import Vuex from 'vuex'
import auth from "@/store/modules/auth";
import todos from "@/components/Todos";
import todosModule from "@/store/modules/todos";


Vue.use(Vuex)

const storeData = {
    modules: {
        auth,
        todosModule
    },
}

const store = new Vuex.Store(storeData)

export default store

