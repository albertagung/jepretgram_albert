<template lang="html">
  <div class="timeline">
    <div class="card" style="width: 20rem;" v-for="share in shares">
      <img class="card-img-top" :src="share.content" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">{{share.title}}</h4>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'MainTimeline',
  methods: {
    ...mapActions(
      [
        'getAllShare'
      ]
    )
  },
  computed: {
    shares () {
      return this.$store.state.shares
    }
  },
  created () {
    this.getAllShare()
  }
}
</script>

<style lang="css">
</style>
