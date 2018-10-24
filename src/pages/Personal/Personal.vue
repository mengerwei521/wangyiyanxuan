<template>
<div class="zhuti">
  <section id="five">
    <header>
      <div class="tou-m">
        <div class="left">
          <a href="javascript:;" class="shou">
            <i class="iconfont icon-shouye"></i>
          </a>
          <a href="javascript:;" class="biao">
            <img src="./img/9.png" alt="">
          </a>
          <div class="right">
            <a href="javascript:;" class="suo">
              <i class="iconfont icon-sousuo-copy"></i>
            </a>
            <a href="javascript:;" class="chat">
              <i class="iconfont icon-gouwuche"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
    <div class="zuti">
      <div class="zongxin">
        <div class="logo">
          <img src="./img/yaunxiua.png" alt="">
        </div>
        <div class="annong">
          <div class="shouji">
            <i class=""></i>
            <span>手机号登录</span>
          </div>
          <div class="youxian">
            <i class=""></i>
            <span>邮箱账号登录</span>
          </div>
          <p class="zhucue">手机号快速注册》</p>
        </div>
      </div>

    </div>
    <div class="dibu">
      <ul>
        <li class="diyige"><img src="img/微信.png" alt=""> <span>微信</span> </li>
        <li class="dierge"><img src="img/QQ.png" alt=""> <span>QQ</span> </li>
        <li><img src="img/微博.png" alt=""> <span>微博</span></li>
      </ul>
    </div>
  </section>
</div>
</template>

<script>
  export default {
    name: "Personal"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .zhuti
    width 100%
    height 100%
    #five
      width 100%
      height 100%
      header
        width 100%
        height 88px
        background-color white
        .tou-m
          height 80px
          padding 0 16px
          .left
            height 80px
            position relative
            .shou
              float left
              display: block
              width 48px
              height 80px
              line-height 80px
              text-align center
              .iconfont
                font-size: 34px
            .biao
              height 80px
              float left
              position absolute
              top 0
              left 0
              bottom 0
              right 0
              margin auto
              display flex
              justify-content center
              align-items center
              flex-direction column
            .right
              margin-left 80%
            .suo
              float left
              display: block
              width 48px
              height 80px
              line-height 80px
              text-align center
              .iconfont
                font-size: 45px
            .chat
              display block
              float left
              width 48px
              height 80px
              line-height 80px
              text-align center
              .iconfont
                font-size 45px





      .zuti
        width 100%
        height 624px
        .zongxin
          width 100%
          height 351px
          .logo
            width 100%
            height 410px
            position relative
            top 0
            left 0
            right 0
            bottom 0
            margin auto
            img
              width 268px
              height 90px
              position absolute
              top 0
              left 0
              right 0
              bottom 0
              margin auto


          .annong
            height 146px
            margin 0 60px
            .shouji
              width 100%
              height 100px
              margin-bottom 16px
              background-color red
              line-height 100px
              text-align center
              font-size 40px
            .youxian
              width 100%
              height 100px
              margin-bottom 16px
              background-color red
              line-height 100px
              text-align center
              font-size 40px
            .zhucue
              width 100%
              height 40px
              line-height 40px
              font-size 30px
              text-align center


      .dibu
        width 100%
        height: 40px
        position absolute
        bottom 120px
        margin-bottom 20px
        ul
          width 100%
          height 40px
          display flex
          flex 1
          justify-content center
          align-items center

          line-height 40px
          li
            display flex
            justify-content center
            align-items center
            font-size 30px
            height 40px
            padding  0 40px
            box-sizing border-box
            &.diyige
              border-right: 2px solid #979797;
            &.dierge
              border-right: 2px solid #979797;





</style>
