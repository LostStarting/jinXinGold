import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    id: 0,
    users:{
      username:"",
      userpass:""
    },
    userfaker:"",
    mounth:""
  },
  mulations:{
    setId(state ,  id) {
      state.id = id
    }
  }
})
