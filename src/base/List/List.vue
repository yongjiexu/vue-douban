<template>
  <div class="list">
    <template v-if="mold === 'thumbnail'" v-for="item in items">
      <router-link
        class="thumbnail"
        :to="{name: 'DetailView', params: { id: item.id }}">
        <div class="content">
          <img v-lazy="item.target.cover_url" v-if="item.target.cover_url" alt="cover">
          <h3>{{item.title}}</h3>
          <p>{{item.target.desc}}</p>
        </div>
        <div class="author">
          <span class="name">by {{item.target.author.name}}</span>
          <span class="label" v-if="item.theme && item.theme.name">
            来自栏目 {{item.theme.name}}
          </span>
        </div>
      </router-link>
    </template>
    <template v-if="mold === 'basic'">
      <ul class="basic">
        <li v-for="item in items">
          <a href="#">
            <h3>{{item.title}}</h3>
            <div class="info">{{item.comments}}</div>
          </a>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    mold: {
      type: String,
      default: 'basic'
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  filters: {
    subStr: function (value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
    }
  }
}
</script>

<style lang='scss' scoped>
.list {
  .thumbnail {
    position: relative;
    display: block;
    padding: 2.5rem 1.8rem 2.5rem 0;
    margin-left: 1.8rem;

    .content {
      overflow: hidden;
      margin-bottom: 1rem;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 0.6rem;
      line-height: 1.41;
      text-align: justify;
      font-size: 1.7rem;
      font-weight: 500;
      color: #494949;
    }

    p {
      text-align: justify;
      color: #aaa;
      font-size: 12px;
      line-height: 1.5;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }

    img {
      float: right;
      width: 25.6%;
      height: 8.678rem;
      margin-left: 2.5rem;
    }

    .author {
      font-size: 1.2rem;
      color: #ccc;
    }

    .label {
      position: absolute;
      bottom: 2.5rem;
      right: 1.8rem;
    }
  }

  .thumbnail ~ .thumbnail::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.1rem;
    content: '';
    background: #e3e3e3;
  }

  .basic {
    h3 {
      padding: 0;
      line-height: 1.41;
      font-size: 1.7rem;
      font-weight: 500;
      color: #494949;
    }

    .info {
      margin-top: 0.5rem;
      font-size: 1.4rem;
      color: #42bd56;
    }
  }
}
</style>
