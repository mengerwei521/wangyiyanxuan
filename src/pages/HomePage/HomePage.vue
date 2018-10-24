<template>
<div class="zhuti">
  <section id="one">
    <div class="tou">
      <header>
        <a href="javascript:;" class="dianji">
          <img src="./img/9.png" alt="">
        </a>
        <div class="xianzi">
          <i class="iconfont icon-sousuo-copy"></i>
          <span class="nrong">搜索商品，共16720款好物</span>
        </div>
      </header>
      <nav class="daohang">
        <ul ref="picsUl">
          <li>推荐</li>
          <li  v-for="(fenli,index) in home.cateList" :key="index" >
            {{fenli.name}}
          </li>
        </ul>
      </nav>
    </div>
    <div class="lunbao">
      <div class="swiper-container">
            <ul class="swiper-wrapper">
              <li class="swiper-slide" v-for="(tu,index) in home.focusList" :key="index">
                  <img :src="tu.picUrl" alt="">
              </li>
            </ul>
        <div class="swiper-pagination"></div>

      </div>
      <div class="baozhang">
        <ul>
          <li v-for="(baoz , index) in home.policyDescList " :key="index">
            <img :src="baoz.icon" alt="">
            <span>{{baoz.desc}}</span></li>

        </ul>
      </div>
    </div>

    <div class="body-m">
      <div class="shangpin">
        <header>
          <span>品牌供应商</span>
          <i class="iconfont icon-shouye"></i>
        </header>
        <ul>
          <li v-for="(shang,index) in shangArr" :key="index">
            <a href="javascript:;">
              <div class="chanpjieshao">
                <h4>{{shang.name}}</h4>
                <div class="jiaoge"><span>{{shang.floorPrice}}</span><span>元起</span></div>
                <i class="xinshang">
                <img :src="shang.picUrl" alt=""></i>

              </div>
              <img :src="shang.appListPicUrl" alt="">
            </a>
          </li>



        </ul>
      </div>
      <div class="hebing">
        <div class="xinfa-m">
        <header>
          <div class="ju">
          <h2>新品发布</h2>
          <div class="chakan">查看全部 <i class="iconfont icon-shouye"></i></div>
          </div>
        </header>
        <div class="chanping">
          <ul>
            <li v-for="">
              <a href="javascript:;">
                <img src="./img/fushi.png" alt="">
                <div class="abstract">
                  <p class="xiaobiao">配件有害</p>
                  <h3>温暖绒毛后包女士家居拖鞋</h3>
                  <p class="nr">击退寒冷，温暖你的每一寸肌肤</p>
                  <p class="jiag">￥39</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
        <div class="xinfa-m">
          <header>
            <div class="ju">
              <h2>新品发布</h2>
              <div class="chakan">查看全部 <i class="iconfont icon-shouye"></i></div>
            </div>
          </header>
          <div class="chanping">
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="./img/fushi.png" alt="">
                  <div class="abstract">
                    <p class="xiaobiao">配件有害</p>
                    <h3>温暖绒毛后包女士家居拖鞋</h3>
                    <p class="nr">击退寒冷，温暖你的每一寸肌肤</p>
                    <p class="jiag">￥39</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </section>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import 'swiper/dist/css/swiper.min.css'

  export default {

    mounted(){

      this.$store.dispatch('getHome',()=>{
        this.$nextTick(()=>{

            new Swiper('.swiper-container', {
              autoplay:true,
              loop: true, // 循环模式
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              }
            })

        })
      })


    },
    computed:{
      ...mapState(['home']),
      shangArr(){
          const {home} = this
        if (home.tagList){
          let smallArr = home.tagList.slice(0,4)
          console.log(smallArr)
          return smallArr
        }{
            return
        }

      }

    },

    methods: {
      _initScroll(){
        const ul = this.$refs.picsUl
        const liWidth = 88

        const count = this.home.cateList.length
        const width = (liWidth ) * count
        ul.style.width = width + 'px'
        new BScroll('.daohang',{
          click:true,
          scrollX:true,  // 水平滑动
        })
      },


     },
    watch:{
      home(value){
        this.$nextTick(()=>{
          this._initScroll();

        })
      }
    }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .zhuti
    width 100%
    height 100%
    background-color #7e8c8d
    #one
      width 100%

      .tou
        width 100%
        height 148px
        header
          height: 88px
          width 100%
          background-color #7e8c8d
          padding 16px 30px
          box-sizing border-box
          .dianji
            width 25%
            height 56px
            float left
            display: flex;
            align-items: center;
          .xianzi
            float left
            width 75%
            height: 56px
            border-radius 6px
            background-color white

            .iconfont
              float: left
              font-size: 60px
            .nrong
              font-size 30px
              height: 56px
              line-height 56px
              text-align center
        .daohang
          width 100%
          height 60px
          overflow hidden
          ul
            height 60px
            overflow: hidden
            li
              float left
              width 88px
              height: 55px
              font-size 25px
              line-height 60px
              text-align center


      .lunbao
        width 100%
        height 442px
        margin-bottom 20px
        .swiper-container
          width 100%
          height 370px
          .swiper-wrapper
            display: flex
            img
              width 750px
          .swiper-pagination
            >span.swiper-pagination-bullet-active
              background #02a774

        .baozhang
          width 100%
          height 72px
          background-color white
          margin-bottom
          ul
            height: 72px
            margin 0 30px
            display flex
            li
              float left
              height: 72px
              width 30%
              line-height 72px
              text-align center
              font-size 22px
              display flex
              justify-content center
              align-items center
              .iconfont
                font-size 30px


      .body-m
        .shangpin
          width 100%
          height  586px
          margin-bottom 20px
          background-color white
          header
            width 100%
            height: 110px
            display flex
            justify-content center
            align-items center
            span
              font-size 30px
            .iconfont
              font-size 35px
          ul
            width 100%
            height: 100%
            padding  0 16px
            box-sizing border-box
            li
              width 50%
              height: 238px
              float left
              padding-right 8px
              padding-bottom 8px
              box-sizing border-box
              a
                display block
                width 100%
                height: 100%
                position relative

                .chanpjieshao
                  width 100%
                  margin-left 13px
                  margin-top 20px
                  position absolute
                  z-index 10
                  h4
                    font-size 24px
                    margin-bottom 5px
                  .jiaoge
                    span
                      float left
                      font-size 20px
                      margin-bottom 6px
                  .xinshang
                    background url("./img/xinshang.png") no-repeat
                    width 64px
                    height 32px
                    display block

                img
                  position: absolute
                  width 100%
                  height: 100%




        .xinfa-m
          header
            width: 100%
            height: 260px
            background url("./img/bj.png") no-repeat
            margin-bottom 32px
            display flex
            align-items center
            justify-content center
            .ju
              h2
                font-size 40px
                height 40px
                line-height 40px
                text-align center
              .chakan
                width 240px
                height:56px
                margin-top 6px
                position relative
                left 50%
                margin-left -120px
                line-height 56px
                text-align center
                font-size 25px
          .chanping
            width 100%
            height: 480px
            background-color white
            ul
              width 100%
              height: 100%
              li
                width 280px
                height: 461px
                margin-left 30px
                a
                  width 100%
                  height 100%
                  display block
                img
                  width 280px
                  height: 280px
                .abstract
                  .xiaobiao
                    background-color #f48f18
                    font-size  24px
                    margin-left 22px
                    width 112px
                    height: 30px
                    line-height 30px
                    text-align center
                  h3
                    font-weight bold
                    font-size 26px
                    height 34px
                    overflow: hidden;
                    white-space: nowrap; //使其不换行
                    text-overflow:ellipsis;
                  .nr
                    height: 30px
                    overflow: hidden;
                    white-space: nowrap; //使其不换行
                    text-overflow:ellipsis;
                    font-size 26px
                  .jiag
                    height 36px
                    font-size 36px




</style>
