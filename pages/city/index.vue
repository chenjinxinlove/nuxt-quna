<template>
  <div>
      <CityHeader />
      <CitySearch />
  </div>
</template>

<script>
import CityHeader from '~/components/City/Header.vue'
import CitySearch from '~/components/City/Search.vue'
export default {
  components: {
    CityHeader,
    CitySearch
  },
}
</script>

<style lang="stylus" scoped>

</style>


