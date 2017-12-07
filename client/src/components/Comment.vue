<template lang="html">
  <div class="comment">
    <div class="card" style="width: 20rem;">
      <ul class="list-group list-group-flush" v-for="comment in commentsByShareId">
        <li class="list-group-item">{{comment.comment}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Comment',
  props: ['shareId'],
  methods: {
    ...mapActions(
      [
        'getAllCommentByShareId'
      ]
    )
  },
  computed: {
    commentsByShareId () {
      return this.$store.state.commentsByShareId
    }
  },
  created () {
    this.getAllCommentByShareId(this.shareId)
  }
}
</script>

<style lang="css">
</style>
