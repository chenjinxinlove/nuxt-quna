<template>
  <div>
      <CityHeader />
      <CitySearch />
      <CityList />
      <CityAlphabet />
  </div>
</template>

<script>
import CityHeader from '~/components/City/Header.vue'
import CitySearch from '~/components/City/Search.vue'
import CityList from '~/components/City/List.vue'
import CityAlphabet from '~/components/City/Alphabet.vue'
import axios from 'axios'
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  async asyncData({ isDev }) {
    // Default data
    let data = {
      releases: [],
      isDev: isDev
    }
    const res = await axios.get('http://d7.weather.com.cn/fishing/api/v1/tab?lon=116.40717&lat=39.9046')
    console.log(res)
    return data
  },
}
</script>

<style lang="stylus" scoped>

</style>


