<template>
  <div>
    <HomeHeader />
    <HomeSwiper />
    <HomeIcons />
  </div>
</template>

<script>
import HomeHeader from '~/components/Header.vue'
import HomeSwiper from '~/components/Swiper.vue'
import HomeIcons from "~/components/Icons.vue";
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style lang="stylus" scoped>

</style>


