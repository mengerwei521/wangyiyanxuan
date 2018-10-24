<template>
<div class="zhuti">
  <section id="two">
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
    <div class="banner-m">
      <ul>
        <li>
          <img src="./img/lunbao-m.png" alt="">
        </li>
        <li>
          <img src="./img/lunbao-m.png" alt="">
        </li>
      </ul>
    </div>

    <div class="xiaobaner-m">
      <ul>
        <li>
          <div>356篇文章</div>
          <img src="img/xiaoban.png" alt="">
          <p>严选好货</p>
        </li>
        <li>
          <div>356篇文章</div>
          <img src="img/xiaoban.png" alt="">
          <p>严选好货</p>
        </li>
        <li>
          <div>356篇文章</div>
          <img src="img/xiaoban.png" alt="">
          <p>严选好货</p>
        </li>


      </ul>
    </div>
    <div class="tuijian">
      <h2>为你</h2>
      <div class="diyi">

        <div class="tu">
          <img src="img/大衣.jpg" alt="">
        </div>
        <div class="wuzi">
          <div class="wenben">
            <span class="left-m">北方入秋冬，该添这些装备</span>
            <span class="right-m">9.9元起</span>
          </div>
          <p>暖气房神器、大衣羽绒、补水妙方</p>
        </div>
      </div>
      <div class="fenlei">
        <ul>
          <li>
            <div class="left">
              <div class="top-m">
                <div class="touxian"><img src="./img/头像.png" alt=""></div>
                <p>周边组:Michael</p>
              </div>
              <p class="shang">大英博物馆周边商品来了！</p>
              <p class="xia">每满99立减10元</p>
            </div>
            <div class="right">
              <p>挑款师推荐</p>
              <img src="./img/hehoa.jpg" alt="">
            </div>
          </li>
          <li>
            <div class="left">
              <div class="top-m">
                <div class="touxian"><img src="" alt=""></div>
                <p>周边组:Michael</p>
              </div>
              <p class="shang">大英博物馆周边商品来了！</p>
              <p class="xia">每满99立减10元</p>
            </div>
            <div class="right">
              <p>挑款师推荐</p>
              <img src="./img/hehoa.jpg" alt="">
            </div>
          </li>

        </ul>
      </div>
    </div>


  </section>
</div>
</template>

<script>
  export default {
    name: "Sense"
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .zhuti
    width 100%
    height 100%

    #two
      width 100%
      height 100%

      header
        width 100%
        height 88px
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





      .banner-m
        width 100%
        height 433px
        padding 24px 0
        ul
          height 100%
          overflow hidden
          li
            width 590px
            height 385px
            margin 0 30px
            float left
            img
              width 100%
              height 100%
      .xiaobaner-m
        height 286px
        margin 30px

        ul
          width 100%
          height 268px

          li
            margin 29px 0
            width 164px
            height 210px
            margin-right 24px
            float left
            display flex
            justify-content center
            align-items center
            flex-direction column
            position relative
            img
              width 164px
              height 164px
            p
              margin-top 6px
              font-size 24px
            div
              position absolute
              top 0
              right 0




      .tuijian
        height 1000%
        margin 30px
        h2
          height 120px
          text-align center
          line-height 120px
          font-size 36px
        .diyi
          border 1px solid #000000
          margin-bottom 30px
          .tu
            width 685px
            height 386px
            img
              width 100%
              height 100%
          .wuzi
            width 685px
            height 186
            padding 24px 20px 67px 20px
            box-sizing border-box
            .wenben
              span
                font-size 36px
                display inline-block
                &.left-m
                  float left
                &.right-m
                  float right


            p
              font-size 30px
              margin-top 6px
        .fenlei
          ul
            li
              width 690px
              height 274px
              margin-bottom 30px
              border 1px solid #000000
              .left
                width 408px
                height 272px
                padding  0 30px 0 20px
                float left
                box-sizing border-box
                .top-m
                  margin-top 15px
                  margin-bottom 30px
                  .touxian
                    width 46px
                    height 46px
                    border-radius 50%
                    float left
                    overflow hidden
                    img
                      width 100%
                      height 100%
                  p

                    height 46px
                    font-size 24px
                    line-height 46px
                    float left


                .shang
                  width 100%
                  height 38px
                  font-size 30px
                  line-height 36px
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;

                .xia
                  width 100%
                  height 36px
                  font-size 26px
                  line-height 36px

              .right
                width 280px
                height 272px
                float left
                position relative
                p
                  height 36px
                  position absolute
                  top 40px
                  right 10px
                img
                  width 100%
                  height 100%

</style>
