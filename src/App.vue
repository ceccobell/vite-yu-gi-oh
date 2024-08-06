<script>
import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
import { store } from './store.js'
import axios from 'axios'
import filterCards from './components/filterCards.vue';

export default {
  components: {
    appHeader,
    appMain,
    filterCards
  },
  created() {
    this.getCardsList(),
    this.getArchetypes()
  },
  methods: {
    getCardsList() {
      if(store.archetypeSelected !== '') {
        axios.get(store.apiUrl + '&archetype=' + store.archetypeSelected).then((result) => {
          store.cardsList = result.data.data
          store.isLoading = false
        })
      } else {
        axios.get(store.apiUrl).then((result) => {
          store.cardsList = result.data.data
          store.isLoading = false
        })
      }
    },
    getArchetypes() {
      axios.get(store.selectApiUrl).then((result) => {
        store.archetypesList = result.data
        console.log(store.archetypes)
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
  <filterCards @filter_cards="getCardsList()" />
  <appMain />
</template>

<style scoped>

</style>
