<template lang="html">
  <div class="sidebar">
    <form @submit.prevent="postNewShare(formPost)">
      <div class="form-group">
        <label for="shareContent">Share Content</label>
        <input type="text" class="form-control" id="shareContent" placeholder="Insert picture link" v-model="formPost.content">
      </div>
      <div class="form-group">
        <label for="shareContent">Share Title</label>
        <input type="text" class="form-control" id="shareTitle" placeholder="Insert title" v-model="formPost.title">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Sidebar',
  data () {
    return {
      formPost: {
        content: '',
        title: '',
        user: ''
      }
    }
  },
  methods: {
    ...mapActions(
      [
        'postNewShare'
      ]
    )
  },
  computed: {
    loginCredentials () {
      return this.$store.state.loginCredentials
    }
  },
  created () {
    this.formPost.user = this.loginCredentials.id
  }
}
</script>

<style lang="css" scoped>
.sidebar {
  background-color: #eee
}
</style>
