<template>
  <div class="status has-header">
    <banner></banner>
    <user-bar></user-bar>
    <div class="content-list">
      <card mold="quote" v-for="item in anonymous_timeline_items" :key="item" :item="item"></card>
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

  import axios from 'axios'

  export default {
    name: 'status',
    components: {Banner, UserBar, Card, DownloadApp},
    data() {
      return {
        items: new Array(10),
        anonymous_timeline_items: []
      }
    },
    created(){
      let _this = this

      axios.get(`/anonymous_timeline?max_id=&ck=&for_mobile=1`)
        .then(function (response) {
          console.log(response)
          _this.anonymous_timeline_items = response.data.items
        })
        .catch(function (error) {
          console.log(error)
        })
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
