import axios from 'axios'

let actions = {
  getAllShare ({commit}) {
    axios.get('http://localhost:3000/share')
    .then(({data}) => {
      commit('setShare', data)
    }).catch((err) => {
      console.log(err)
    })
  }
}

export default actions
