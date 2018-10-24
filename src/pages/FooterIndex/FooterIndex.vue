<template>
  <div>

      <router-view/>

  <footer id="footers">
    <a href="javascript:;" class="footer-nav "
       @click="goTo('/homepage')" :class="{active:$route.path==='/homepage'}">
            <span>
              <i class="iconfont icon-shouye"></i>
            </span>
      <span  class="footer_text">首页</span>
    </a>
    <a href="javascript:;"  class="footer-nav "
       @click="goTo('/sense')" :class="{active:$route.path==='/sense'}">
            <span>
              <i class="iconfont icon-saoma"></i>
            </span>
      <span  class="footer_text">识物</span>
    </a>
    <a href="javascript:;" class="footer-nav "
       @click="goTo('/classification')" :class="{active:$route.path==='/classification'}">
            <span>
              <i class="iconfont icon-fenlei"></i>
            </span>
      <span  class="footer_text">分类</span>
    </a>
    <a href="javascript:;" class="footer-nav "
       @click="goTo('/shoppingcart')" :class="{active:$route.path==='/shoppingcart'}">
            <span>
              <i class="iconfont icon-gouwuche"></i>
            </span>
      <span class="footer_text">购物车</span>
    </a>
    <a href="javascript:;" class="footer-nav "
       @click="goTo('/personal')"
       :class="{active:$route.path==='/personal'}">
            <span>
              <i class="iconfont icon-geren11"></i>
            </span>
      <span class="footer_text">我的</span>
    </a>
  </footer>

  </div>
</template>

<script>
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  #footers
    display none
    position fixed
    left 0
    bottom 0
    display flex
    height 98px
    width 100%
    background-color #7e8c8d
    .footer-nav
      display flex
      flex 1
      flex-wrap: nowrap
      justify-content center
      align-items center
      flex-direction column
      &.active
        color: #ffffff
        span
          margin 3px
          .iconfont
            font-size 40px
          .footer_text
            font-size 24px





</style>
