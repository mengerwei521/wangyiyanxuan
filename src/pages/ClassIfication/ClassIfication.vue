<template>
  <div class="zhuti">
    <section id="three">
      <header>
        <div class="baohan">
          <div class="ss">
            <i class="iconfont icon-sousuo-copy"></i>
            <span>搜索商品, 共16701款好物</span>
          </div>
        </div>
      </header>
      <div class="left">
        <ul>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
          <li>网络</li>
        </ul>
      </div>
      <div class="right">
        <div class="banner">
          <img src="img/banner.jpg" alt="">
        </div>
        <div class="zuyao">
          <ul>
            <li>
              <img src="img/xieping.png" alt="">
              <p>居家新屏</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "ShoppingCart"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .zhuti
    width 100%
    height 100%
    background-color #7e8c8d
    #three
      width 100%
      height: 100%
      overflow hidden

      header
        width 100%
        height 88px
        .baohan
          height 88px
          margin  0 30px
          position relative
          .ss
            position absolute
            width 100%
            height 56px
            margin 12px 0
            background-color #7e8c8d
            display flex
            justify-content center
            align-items center

            .iconfont
              font-size 26px
            .span
              font-size 26px
      .left
        width 160px
        height: 1234px
        float left
        ul
          width 100%
          height 100%
          li
            width 160px
            height 50px
            font-size 30
            line-height 50px
            text-align center
      .right
        float left
        background-color #f48f18
        width 528px
        height: 1088px
        padding 30px 30px 21px 30px
        .banner
          width 100%
          height: 192px
        .zuyao
          width 100%
          height: 100%
          ul
            li
              width 144px
              height: 216px
              display flex
              justify-content center
              align-items center
              flex-direction column
              float: left;
              margin-right 32px





</style>


