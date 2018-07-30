<template>
<div class="container">
  <div class="swiper" v-swiper:mySwiper="swiperConfig">
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
        'http://img1.qunarzz.com/piao/fusion/1807/e7/d70d0830a9941b02.jpg_750x200_f8c7d2ad.jpg',
        'http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg',
        'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'
      ],
      swiperConfig: {
        autoplay:true,
        loop: true,
        pagination: {
            el: '.swiper-pagination'
          },
      }
    }
  },
}
</script>

<style scoped lang="stylus">
.container >>> .swiper-pagination-bullet-active
  background #fff !important
.container
  overflow: hidden !important
  -webkit-overflow-scrolling: auto
  .swiper
    width: 100%
    height: 184px
    position: relative
    img
      width: 100%
      height: 100%
</style>
