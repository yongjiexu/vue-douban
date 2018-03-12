<template>
  <div class="movie-view has-header">
    <scroller title="最受关注图书｜虚构类" type="hasCover" :items="book_fiction_collection_items"></scroller>
    <scroller title="最受关注图书｜非虚构类" type="hasCover" :items="book_nonfiction_collection_items"></scroller>
    <scroller-with-price title="豆瓣纸书" type="hasCover" :items="market_product_book_mobile_web_collection_items">
      <div class="promItem" slot="promItem">
        <img class="corver" :src="market_product_book_mobile_web_header.cover.url" alt="">
        <div class="content">
          <span class="price">¥ {{market_product_book_mobile_web_header.price}}</span>
          <p class="name">{{market_product_book_mobile_web_header.title}}</p>
          <p class="info">{{market_product_book_mobile_web_header.info}}</p>
        </div>
      </div>
    </scroller-with-price>
    <scroller title="发现好书" type="onlyString" :items="bookTags"></scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  import Scroller from 'base/Scroller/Scroller'
  import ScrollerWithPrice from 'base/ScrollerWithPrice/ScrollerWithPrice'
  import Types from 'base/Types/Types'
  import DownloadApp from 'base/DownloadApp/DownloadApp'

  import axios from 'axios'

  export default {
    name: 'book-view',
    components: {
      Scroller,
      ScrollerWithPrice,
      Types,
      DownloadApp
    },
    data() {
      return {
        // 保存虚构类图书数据
        book_fiction_collection: {},
        book_fiction_collection_items: [],
        // 保存非虚构类图书数据
        book_nonfiction_collection: {},
        book_nonfiction_collection_items: [],
        // 保存豆瓣书店数据
        market_product_book_mobile_web_header: {},
        market_product_book_mobile_web_collection: {},
        market_product_book_mobile_web_collection_items: []
      }
    },
    computed: {
      // Getting Vuex State from store/modules/book
      ...mapState({
        novel: state => state.book.novel,
        reality: state => state.book.reality,
        travel: state => state.book.travel,
        bookTags: state => state.book.bookTags
      })
    },
    methods: {
      // Dispatching getBook
      getBook: function () {
        this.$store.dispatch('getBook')
      }
    },
    created: function created() {
      // Getting books data on created
      this.getBook()

      let _this = this

      axios.get(`/book_fiction/?start=0&count=8&loc_id=0&_=0`)
        .then(function (response) {
          console.log(response)
          _this.book_fiction_collection = response.data.subject_collection
          _this.book_fiction_collection_items = response.data.subject_collection_items
        })
        .catch(function (error) {
          console.log(error)
        })

      axios.get(`/book_nonfiction/?start=0&count=8&loc_id=0&_=0`)
        .then(function (response) {
          console.log(response)
          _this.book_nonfiction_collection = response.data.subject_collection
          _this.book_nonfiction_collection_items = response.data.subject_collection_items
        })
        .catch(function (error) {
          console.log(error)
        })

      axios.get(`/market_product_book_mobile_web/?os=ios&start=0&count=8&loc_id=0&_=0`)
        .then(function (response) {
          console.log(response)
          _this.market_product_book_mobile_web_header = response.data.header
          _this.market_product_book_mobile_web_collection = response.data.subject_collection
          _this.market_product_book_mobile_web_collection_items = response.data.subject_collection_items
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style scoped>
  .promItem {
    overflow: hidden;
    margin: 1.6rem 1.8rem 0.8rem 1.6rem;
  }

  .corver {
    float: left;
    width: 10rem;
    margin-right: 1.5rem;
  }

  .content {
    margin-right: 1rem;
  }

  .name {
    font-size: 2rem;
    color: #494949;
    margin: 1rem;
    max-width: 100%;
    line-height: 2.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }

  .price {
    float: right;
    color: #E76648;
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  .info {
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.5;
    color: #9B9B9B;
  }
</style>
