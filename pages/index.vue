<template>
  <div>
    <HomeHeader />
    <HomeSwiper />
    <HomeIcons />
    <HomeRecommend />
    <HomeWeekend />
  </div>
</template>

<script>
import HomeHeader from '~/components/Header.vue'
import HomeSwiper from '~/components/Swiper.vue'
import HomeIcons from "~/components/Icons.vue"
import HomeRecommend from '~/components/Recommend.vue'
import HomeWeekend from '~/components/Weekend.vue'
import axios from 'axios'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  asyncData (context) {
    axios.get('https://www.baidu.com/home/msg/data/personalcontent?callback=jQuery110206153324135314835_1532870842990&num=8&_req_seqid=c252f51200002057&sid=1466_21117_18559_26922_22075&_=1532870842991')
      .then((data) => {
        return {data}
      })
    return {a : 'ds'}
  },
  methods: {
    getHomeInfo() {
      
    },
    getHomeInfoSucc() {
      
    }
  },
  mounted() {
    console.log(this.props)
  },
}
</script>

<style lang="stylus" scoped>

</style>


