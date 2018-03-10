<template>
  <div class="home-view has-header">
    <sub-nav mold="quickNav"></sub-nav>
    <list mold="thumbnail" :items="recommendations"></list>
    <!--<infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">-->
      <!--<loading slot="spinner"></loading>-->
    <!--</infinite-loading>-->
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapState, mapActions} from 'vuex'

  import InfiniteLoading from 'vue-infinite-loading'
  import SubNav from 'base/SubNav/SubNav'
  import List from 'base/List/List'
  import Loading from 'base/Loading/Loading'

  export default {
    name: 'home-view',
    data() {
      return {
        recommendations: []
      }
    },
    components: {
      SubNav,
      List,
      InfiniteLoading,
      Loading
    },
    computed: {
      // Getting Vuex State from store/modules/activities
      ...mapState({
        events: state => state.activities.events
      })
    },
    methods: {
      // Using vue-infinite-loading
      onInfinite() {
        setTimeout(() => {
          this.loadMore()
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        }, 1000)
      },
      // Dispatching Actions
      ...mapActions([
        'loadMore'
      ])
    },
    created() {
      const _this = this
      axios.get('/recommend_feed')
        .then(function (response) {
          _this.recommendations = response.data.recommend_feeds
          console.log(_this.recommendations)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style lang="scss" scoped>
  .sub-nav {
    margin: 0 1.8rem;
    padding-top: 0.2rem;
  }
</style>
