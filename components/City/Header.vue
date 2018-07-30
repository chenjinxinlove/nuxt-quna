<template>
  <div class="header">
    城市选择
    <nuxt-link to="/"><div class="iconfont header-back">&#xe624;</div></nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '../../assets/stylus/varibles.styl'
.header
  overflow hidden  
  height 86px
  line-height 86px
  text-align center
  color #fff
  background $bgColor
  font-size 32px
  .header-back
    position absolute
    top 0
    left 0
    width 64px
    text-align center
    font-size 40px
  a
    color #fff
</style>

