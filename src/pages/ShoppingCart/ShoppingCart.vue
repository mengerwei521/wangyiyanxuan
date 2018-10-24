<template>
  <div class="zhuti">
    <section id="four">
      <header>
        <div class="touba">
          <span class="che">购物车</span>
          <div class="right">
            <span>领卷</span>
          </div>
        </div>
      </header>
      <div class="zhuti">
        <div class="baozheng">
          <ul>
            <li>。无忧无虑退款</li>
            <li>。48小时物流退货</li>
            <li>。满38元免物流</li>
          </ul>
        </div>
        <div class="gouwu">
          <div class="car">
            <img src="img/chat.png" alt="">
          </div>
          <div class="deng">
            登录
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "ClassIfication"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .zhuti
    width 100%
    height 100%

    #four
      width 100%
      height 100%
      header
        width 100%
        height 88px
        .touba
          height 88px
          margin 0 30px
          position relative
          .che
            display block
            width 108px
            height 88px
            float left
            text-align center
            line-height 88px
            font-size 34px
            position absolute
            left 50%
            margin-left -54px

          .right
            width 90px
            height 88px
            float right
            text-align center
            line-height 88px
            span
              width 60px
              height 33px
              font-size 24px

      .zhuti
        width 100%
        height 100%
        position fixed
        top:88px
        .baozheng
          height 70px
          margin 0 30px
          ul
            width 100%
            height 70px
            display: flex
            justify-content center
            align-items center
            li
              flex 1
              height 36px
              font-size 24px
              float left
              display flex
              justify-content center
              align-items center

        .gouwu
          width 100%
          height 300px
          position absolute
          top 0
          bottom 0
          left 0
          right 0
          margin auto
          .car
            width 248px
            height 248px

            position absolute
            top: 0
            left:0
            right 0
            bottom 0
            margin auto
          .deng

            width 480px
            height 92px
            background-color red
            font-size 40px
            line-height 92px
            text-align center
            position absolute
            top: 0
            left:0
            right 0
            bottom 0
            margin auto
            margin-top 260px

</style>
