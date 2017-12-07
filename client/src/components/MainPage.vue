<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div class="col-md-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import MainTimeline from '@/components/MainTimeline'
export default {
  components: {
    MainTimeline,
    Sidebar
  }
}
</script>

<style lang="css">
</style>
