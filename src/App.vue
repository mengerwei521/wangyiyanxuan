<template>
  <div id="app" class="bottom-border-1px top-border-1px">
    <router-view/>
    <Fengmian/>
  </div>
</template>

<script>
  import Fengmian from './components/Fengmian/Fengmian.vue'
export default {

  components:{
    Fengmian
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/mixins.styl"
  #app
    width 100%
    height:100%

</style>
