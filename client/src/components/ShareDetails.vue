<template lang="html">
  <div class="shareDetails">
    <div class="card" style="width: 50vw">
      <img class="card-img-top" :src="shareById.content" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">{{shareById.title}}</h4>
      </div>
      <Comment :shareId="shareId"></Comment>
      <PostComment :shareId="shareId"></PostComment>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Comment from '@/components/Comment'
import PostComment from '@/components/PostComment'
export default {
  name: 'ShareDetails',
  props: ['shareId'],
  components: {
    Comment,
    PostComment
  },
  methods: {
    ...mapActions(
      [
        'getShareById'
      ]
    )
  },
  computed: {
    shareById () {
      return this.$store.state.shareById
    }
  },
  created () {
    this.getShareById(this.shareId)
  }
}
</script>

<style lang="css">
</style>
