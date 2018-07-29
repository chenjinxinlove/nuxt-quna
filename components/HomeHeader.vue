<template>
  <div class="header">
    <div class="header-left"> 
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
.header
  display flex
  line-height 86px
  background #00bcd4
  color #fff
  .header-left
    width 64px
    float left
  .header-input
    margin-top 12px
    height 64px
    padding-left 20px
    box-sizing border-box
    line-height 64px
    margin-left 20px
    flex 1
    background #fff
    border-radius 5px
    color #ccc
  .header-right
    width 124px
    float right
    text-align center
</style>

