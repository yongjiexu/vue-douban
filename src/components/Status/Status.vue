<template>
  <div class="status has-header">
    <banner></banner>
    <user-bar></user-bar>
    <div class="content-list">
      <card mold="quote" v-for="item in items" :key="item"></card>
      <a class="list-link" href="#">显示更多广播</a>
    </div>
    <download-app></download-app>
  </div>
</template>

<script>
  import Banner from 'base/Banner/Banner'
  import UserBar from 'base/UserBar/UserBar'
  import Card from 'base/Card/Card'
  import DownloadApp from 'base/DownloadApp/DownloadApp'

  export default {
    name: 'status',
    components: { Banner, UserBar, Card, DownloadApp },
    data () {
      return {
        items: new Array(10)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list-link {
    display: block;
    padding: 1.5rem 0;
    font-size: 1.6rem;
    line-height: 1.8rem;
    text-align: center;
    color: #42bd56;
  }
</style>
