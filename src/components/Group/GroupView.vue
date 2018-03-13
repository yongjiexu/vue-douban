<template>
  <div class="group-view has-header">
    <user-bar></user-bar>
    <group :title="group.name" :items="group.groups" v-for="group in classified_groups">
      <a class="list-link" href="#" slot="more">更多相关小组</a>
    </group>
    <download-app></download-app>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  import UserBar from 'base/UserBar/UserBar'
  import Group from 'base/Group/Group'
  import DownloadApp from 'base/DownloadApp/DownloadApp'
  import axios from 'axios'

  export default {
    name: 'group-view',
    components: {
      UserBar,
      Group,
      DownloadApp
    },
    data() {
      return {
        classified_groups: []
      }
    },
    computed: {
      // Getting Vuex State from store/modules/group
      ...mapState({
        group_a: state => state.group.group_a,
        group_b: state => state.group.group_b,
        group_c: state => state.group.group_c
      })
    },
    created: function () {
      // Dispatching getGroup on created
      this.$store.dispatch('getGroup')

      let _this = this

      axios.get(`/rec_groups_for_newbies?ck=&for_mobile=1`)
        .then(function (response) {
          console.log(response)
          _this.classified_groups = response.data.rec_groups[0].classified_groups
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
    margin-bottom: 3rem;
    padding: 1.5rem 0;
    font-size: 1.6rem;
    line-height: 1.8rem;
    text-align: center;
    color: #42bd56;
  }

  .user-bar {
    margin-bottom: 1.5rem;
  }
</style>
