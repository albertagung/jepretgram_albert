<template lang="html">
  <div class="comment">
    <div class="card" style="width: 20rem;">
      <ul class="list-group list-group-flush" v-for="comment in comments">
        <li class="list-group-item">{{comment.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  methods: {
    ...mapActions(
      [
        'getAllComments'
      ]
    )
  }
  computed: {
    comments () {
      return this.$store.state.comments
    }
  },
  created () {
    this.getAllComments()
  }
}
</script>

<style lang="css">
</style>
