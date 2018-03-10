<template>
  <div class="home-view has-header">
    <sub-nav mold="quickNav"></sub-nav>
    <list mold="thumbnail" :items="recommendations"></list>
    <infinite-loading :on-infinite="onInfinite">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>

<script>
  import axios from 'axios'

  import InfiniteLoading from 'vue-infinite-loading'
  import SubNav from 'base/SubNav/SubNav'
  import List from 'base/List/List'
  import Loading from 'base/Loading/Loading'

  export default {
    name: 'home-view',
    data() {
      return {
        recommendations: [],
        requestRecommendationsTimes: 0
      }
    },
    components: {
      SubNav,
      List,
      InfiniteLoading,
      Loading
    },
    computed: {},
    methods: {
      // Using vue-infinite-loading
      onInfinite($state) {
        setTimeout(() => {
          this.loadMore()
          $state.loaded()
        }, 1000)

      },
      loadMore() {
        const _this = this
        let milliSecondsInADay = 86400000
        let _next_date = new Date(new Date().getTime() - _this.requestRecommendationsTimes * milliSecondsInADay).toLocaleDateString().split('/').join('-')
        _this.requestRecommendationsTimes++
        axios.get(`/recommend_feed/`, {
          params: {
            next_date: _next_date
          }
        })
          .then(function (response) {
            _this.recommendations = _this.recommendations.concat(response.data.recommend_feeds)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    created() {
      const _this = this
      axios.get(`/recommend_feed/`)
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
