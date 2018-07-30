<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>
<script>
export default {
  name: 'Alphabet'
}
</script>
<style lang="stylus" scoped>
@import '../../assets/stylus/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 158px
  right 0
  bottom 0
  width 40px
  .item
    text-align center
    line-height 40px
    color $bgColor
</style>

