<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <nuxt-link to="/detail">城市
        <li class="item">
          <div class="item-img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg" alt="">
          </div>
          <div class="item-info">
            <p class="item-title">故宫</p>
            <p class="item-desc">故宫故宫故宫故宫</p>
            <div class="item-buttom">查看详情</div>
          </div>
        </li>
      </nuxt-link>
      <li class="item">
        <div class="item-img-wrapper">
          <img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_150x150_2dec3e78.jpg" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">八达岭长城</p>
          <p class="item-desc">八达岭长城八达岭长城</p>
          <div class="item-buttom">查看详情</div>
        </div>
      </li>
      <li class="item">
        <div class="item-img-wrapper">
          <img src="http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_150x150_2747e538.jpg" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">颐和园</p>
          <p class="item-desc">颐和园颐和园颐和园</p>
          <div class="item-buttom">查看详情</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Recommend'
}
</script>
<style lang="stylus" scoped>
@import '../../assets/stylus/varibles.styl'
.recommend
  .title
    line-height 80px
    background #eee
    text-indent 20px
  .item
    display flex
    overflow hidden
    border-bottom 1px solide #ccc
    img
      width 170px
      height 170px
      padding 10px
    .item-info
      flex 4
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