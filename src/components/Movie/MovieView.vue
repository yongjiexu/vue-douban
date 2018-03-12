<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" :items="movie_showing_collection_items"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="movie_free_stream_collection_items"></scroller>
    <scroller title="新片速递" type="hasCover" :items="movie_latest_collection_items"></scroller>
    <scroller title="发现好电影" type="onlyString" :items="movieTags"></scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  import Scroller from 'base/Scroller/Scroller'
  import Types from 'base/Types/Types'
  import DownloadApp from 'base/DownloadApp/DownloadApp'

  import axios from 'axios'

  export default {
    name: 'movie-view',
    components: {Scroller, Types, DownloadApp},
    data() {
      return {
        // 保存影院热映数据
        movie_showing_collection: {},
        movie_showing_collection_items: [],
        // 保存免费在线电影数据
        movie_free_stream_collection: {},
        movie_free_stream_collection_items: [],
        // 保存新片速递数据
        movie_latest_collection: {},
        movie_latest_collection_items: []

      }
    },
    computed: {
      // Getting Vuex State from store/modules/movie
      ...mapState({
        hotMovies: state => state.movie.hotMovies,
        topMovies: state => state.movie.topMovies,
        newMovies: state => state.movie.newMovies,
        movieTags: state => state.movie.movieTags
      })
    },
    methods: {
      // Dispatching getMovie
      getMovie: function () {
        this.$store.dispatch('getMovie')
      }
    },
    created() {
      // Getting movies data on created
      this.getMovie()

      let _this = this

      axios.get(`/movie_showing/?start=0&count=8&loc_id=108288&_=0`)
        .then(function (response) {
          console.log(response)
          _this.movie_showing_collection = response.data.subject_collection
          _this.movie_showing_collection_items = response.data.subject_collection_items
        })
        .catch(function (error) {
          console.log(error)
        })

      axios.get(`/movie_free_stream/?start=0&count=8&loc_id=108288&_=0`)
        .then(function (response) {
          console.log(response)
          _this.movie_free_stream_collection = response.data.subject_collection
          _this.movie_free_stream_collection_items = response.data.subject_collection_items
        })
        .catch(function (error) {
          console.log(error)
        })
      axios.get(`/movie_latest/?start=0&count=8&loc_id=108288&_=0`)
        .then(function (response) {
          console.log(response)
          _this.movie_latest_collection = response.data.subject_collection
          _this.movie_latest_collection_items = response.data.subject_collection_items
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style scoped>

</style>
