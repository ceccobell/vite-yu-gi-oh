<script>
import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
import { store } from './store.js'
import axios from 'axios'

export default {
  components: {
    appHeader,
    appMain
  },
  created() {
    this.getCardsList()
  },
  methods: {
    getCardsList() {
      axios.get(store.apiUrl).then((result) => {
        store.cardsList = result.data.data
        console.log(store.cardsList[0])
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
  <appMain />
</template>

<style scoped>

</style>
