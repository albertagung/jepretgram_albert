<template lang="html">
  <div class="timeline">
    <div class="card" style="width: 20rem;" v-for="share in shares">
      <img class="card-img-top" :src="share.content" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">{{share.title}}</h4>
        <router-link :to="`/main-page/${share._id}`"><a class="btn btn-primary">View Details</a></router-link>
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
    },
    loginCredentials () {
      return this.$store.state.loginCredentials
    }
  },
  created () {
    this.getAllShare()
  }
}
</script>

<style lang="css">
</style>
