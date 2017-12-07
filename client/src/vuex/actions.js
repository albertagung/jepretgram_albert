import axios from 'axios'
import router from '../router'

let actions = {
  getAllShare ({commit}) {
    axios.get('http://localhost:3000/share')
    .then(({data}) => {
      commit('setShare', data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getLoginCredentials ({commit}, payload) {
    axios.post('http://localhost:3000/login', payload)
    .then(({data}) => {
      commit('setLoginCredentials', data)
      router.push('/main-page')
    }).catch((err) => {
      console.log(err)
    })
  },
  postNewShare ({commit}, payload) {
    axios.post('http://localhost:3000/share', payload)
    .then(({data}) => {
      commit('setNewShare', data)
    }).catch((err) => {
      console.log(err)
    })
  }
}

export default actions
