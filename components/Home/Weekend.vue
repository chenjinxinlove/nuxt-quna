<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item">
        <div class="item-img-wrapper">
          <img src="http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">故宫</p>
          <p class="item-desc">故宫故宫故宫故宫</p>
        </div>
      </li>
      <li class="item">
        <div class="item-img-wrapper">
          <img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_150x150_2dec3e78.jpg" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">八达岭长城</p>
          <p class="item-desc">八达岭长城八达岭长城</p>
        </div>
      </li>
      <li class="item">
        <div class="item-img-wrapper">
          <img src="http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_150x150_2747e538.jpg" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">颐和园</p>
          <p class="item-desc">颐和园颐和园颐和园</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Weekend'
}
</script>
<style lang="stylus" scoped>
@import '../../assets/stylus/varibles.styl'
.recommend
  .title
    line-height 80px
    background #eee
    text-indent 20px
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    img
      width 100%
  .item-info
    padding 10px
    .item-title
      line-height 54px
      font-size 32px
    .item-desc
      line-height 32px
      font-size 28px
      color #ccc
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .item-buttom
      display inline-block
      line-height 50px
      background #ff9300
      padding 0 20px
      border-radius 3px
      margin-top 20px
      color #fff
</style>