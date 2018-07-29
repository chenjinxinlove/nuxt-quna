<template>
  <div>
    <HomeHeader />
    <HomeSwiper />
    <HomeIcons />
    <HomeRecommend />
  </div>
</template>

<script>
import HomeHeader from '~/components/Header.vue'
import HomeSwiper from '~/components/Swiper.vue'
import HomeIcons from "~/components/Icons.vue"
import HomeRecommend from '~/components/Recommend.vue'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  }
}
</script>

<style lang="stylus" scoped>

</style>


