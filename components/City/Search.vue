<template>
  <div class="search">
   <input type="text" placeholder="输入城市名或拼音" class="search-input">
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
@import '../../assets/stylus/varibles.styl'
.search
  height 72px
  padding 10px
  background $bgColor
  .search-input
    box-sizing border-box
    border-style none
    outline none
    width 100%
    height 62px
    padding 0 10px
    line-height 62px
    text-align center
    border-radius 6px
    color #666
</style>

