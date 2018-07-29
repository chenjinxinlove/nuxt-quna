<template>
<div class="container">
  <div class="focus-goods-swiper" v-swiper:mySwiper="swiperConfig">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="index" v-for="(item, index)  in images">
        <img :src="item">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      images: [
        'http://simg1.qunarzz.com/site/images/wap/home/recommend/20160509_banner_750x376.jpg',
        'https://s.qunarzz.com/finance/topics/jewel/find-jewel-banner.jpg'
      ],
      swiperConfig: {
        autoplay: 4000,
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  },
}
</script>

<style scoped lang="stylus">
.container
  overflow: hidden !important
  -webkit-overflow-scrolling: auto
  .focus-goods-swiper
    width: 100%
    height: 320px
    position: relative
    img
      width: 100%
      height: 100%
</style>
