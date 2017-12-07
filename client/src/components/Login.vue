<template lang="html">
  <div class="login">
    <div class="container">
      <form @submit.prevent="getLoginCredentials(formLogin)">
        <div class="form-group">
          <label for="inputUsername">Username</label>
          <input type="text" class="form-control" id="inputUsername" placeholder="Insert Username" v-model="formLogin.username">
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Insert password" v-model="formLogin.password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      formLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(
      [
        'getLoginCredentials'
      ]
    )
  }
}
</script>

<style lang="css">
</style>
