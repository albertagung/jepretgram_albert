<template lang="html">
  <div class="postComment">
    <form @submit.prevent="postNewComment(formPost)">
      <div class="form-group">
        <label for="comment">Your Comment</label>
        <input type="text" class="form-control" id="comment" placeholder="Insert comment" v-model="formPost.comment">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'PostComment',
  props: ['shareId'],
  data () {
    return {
      formPost: {
        comment: '',
        shareId: '',
        userId: ''
      }
    }
  },
  methods: {
    ...mapActions(
      [
        'postNewComment'
      ]
    )
  },
  computed: {
    loginCredentials () {
      return this.$store.state.loginCredentials
    }
  },
  created () {
    this.formPost.shareId = this.shareId
    this.formPost.userId = this.loginCredentials.id
  }
}
</script>

<style lang="css">
</style>
