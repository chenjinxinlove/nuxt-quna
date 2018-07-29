<template>
  <div class="icons">
    <div class="swiper" v-swiper:mySwiper="swiperConfig">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="index" v-for="(page, index)  in pages">
        <div class="icon" :key="index" v-for="(item, index)  in pages[index]">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
    
  </div>
</template>
<script>
export default {
  name: 'Icons',
  data() {
    return {
      icons: [
        {
          'title': '景点门票',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          'title': '北京必游',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
        },
        {
          'title': '夏日游玩',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png'
        },
        {
          'title': '文化古迹',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png'
        },
        {
          'title': '植物园',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'
        },
        {
          'title': '故宫',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png'
        },
        {
         'title': '一日游',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
        },
        {
         'title': '汽车票',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
        },
        {
          'title': '游乐场',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'
        },
        {
          'title': '全部玩乐',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png'
        }
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
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
.icons >>> .swiper-pagination-bullet-active
  background bule !important
.icons >>> .swiper-container
  height 0
  padding-bottom 45%
  overflow hidden
.icons
  .icon
    position relative
    overflow hidden
    width 25%
    text-align center
    padding-bottom 20%
    height 0
    float left
    .icon-img
      position absolute
      top 0
      bottom 22px
      right 0
      left 0
      box-sizing border-box
      padding 5px
      img
        height 110px
        width 110px
        display block
        margin 0 auto
    p
      position absolute
      bottom 0
      right 0
      left 0
      line-height 44px
      height 44px
      text-align center
      color #333
</style>

