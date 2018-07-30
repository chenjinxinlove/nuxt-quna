<template>
  <div>
      <CityHeader />
      <CitySearch />
      <CityList />
  </div>
</template>

<script>
import CityHeader from '~/components/City/Header.vue'
import CitySearch from '~/components/City/Search.vue'
import CityList from '~/components/City/List.vue'
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
}
</script>

<style lang="stylus" scoped>

</style>


