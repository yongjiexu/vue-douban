<template>
  <div class="pages-view">
    <header-bar @showTalion="open"></header-bar>
    <router-view></router-view>
    <talion-view v-show="talion" @closeTalion="close"></talion-view>
  </div>
</template>

<script>
  import HeaderBar from 'components/HeaderBar/HeaderBar'
  import TalionView from 'components/Talion/Talion'

  export default {
    name: 'pages-view',
    components: { HeaderBar, TalionView },
    data () {
      return {
        talion: ''
      }
    },
    methods: {
      open: function () {
        this.talion = 'open'
      },
      close: function () {
        this.talion = ''
      }
    }
  }
</script>

<style scoped>

</style>
