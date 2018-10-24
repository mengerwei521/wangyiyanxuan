<template>

    <div id="fengmian" v-if="this.$route.path === '/'">
      <section  >
        <div class="top-m">
          <img src="./img/shou1.jpg" alt="">
        </div>
        <div class="content-m">
          <img src="./img/shou2.jpg" alt="">
        </div>
        <div class="bottom-m">
          <img src="./img/shou3.jpg" alt="">
        </div>
        <a href="javascript:;" class="xiazai"></a>
        <a href="javascript:;" class="tiaozuan" @click="goTo('/footer')"></a>
      </section>
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
  #fengmian
    position relative
    width 100%
    height: 100%
    background-color #e3e3e2
    &.on
      display none
    .top-m
      width 100%
      height: 386px;
      img
        width 100%
        height:  386px
        border:0
    .content-m
      width 100%
      height 327px
      img
        width 100%
        height: 100%
        border:0
    .bottom-m
      width 100%
      height: 432px
      border:0
      img
        width 100%
        height: 100%
        border:0
    .xiazai
      position: absolute
      bottom 430px
      left 50%
      margin-left -215px
      display: block
      width 432px
      height: 98px
    .tiaozuan
      position absolute
      bottom  360px
      left 50%
      margin-left -127px
      display: block
      width 254px
      height: 30px



</style>
