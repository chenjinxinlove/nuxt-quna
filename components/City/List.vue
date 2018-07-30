<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="buttom-list">
          <div class="buttom-wrapper">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrapper">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrapper">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrapper">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrapper">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrapper">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrapper">
            <div class="buttom">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="buttom-list">
          <div class="buttom-wrapper">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrapper">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrapper">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrapper">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrapper">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrapper">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrapper">
            <div class="buttom">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">
            阿卡索
          </div>
          <div class="item border-bottom">
            阿卡索
          </div>
          <div class="item border-bottom">
            阿卡索
          </div>
          <div class="item border-bottom">
            阿卡索
          </div>
          <div class="item border-bottom">
            阿卡索
          </div>
          <div class="item border-bottom">
            阿卡索
          </div>
          <div class="item border-bottom">
            阿卡索
          </div>
          <div class="item border-bottom">
            阿卡索
          </div>
          <div class="item border-bottom">
            阿卡索
          </div>
          <div class="item border-bottom">
            阿卡索
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from '~/plugins/better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {})
    })
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/stylus/varibles.styl'
.list
  margin-top 10px
  overflow hidden
  position absolute
  left 0
  right 0
  top 158px
  right 0
  .border-topbottom, .border-bottom
    border 1px slide #ccc
  .title
    line-height 54px
    background #eeeeee
    padding-left 20px
    color #666
    font-size 26px
  .buttom-list
    padding 10px 60px 10px 10px
    overflow hidden
    .buttom-wrapper
      float left
      width 33.33%
      .buttom
        padding 10px 0
        text-align center
        margin 10px
        border 2px solid #ccc
        border-radius 6px
  .item-list
    .item
      line-height 76px
      padding-left 20px
</style>

