<script>
import appHeader from './components/appHeader.vue';
import { store } from './store.js'
import axios from 'axios'

export default {
  components: {
    appHeader
  },
  created() {

  },
  methods: {
    getCardsList() {
      axios.get(store.apiUrl).then((result) => {
        store.cardsList = result.data.data
      })
    }
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <appHeader />

</template>

<style scoped>

</style>
