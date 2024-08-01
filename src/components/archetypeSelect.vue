<script>
import { store } from '../store';
import axios from 'axios'

export default {
    data() {
        return {
            store
        }
    },
    created() {
        this.getArchetype()
    },
    methods: {
    getArchetype() {
      axios.get(store.selectApiUrl).then((result) => {
        store.archetypes = result.data
        console.log(store.archetypes)
      })
    }
  }
}
</script>

<template>
    <div class="col-6 d-flex align-items-center">
        <select class="form-select" aria-label="Default select example">
          <option selected>select archetype</option>
          <option v-for="archetype, index in store.archetypes" :key="index" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>

<style scoped>
    
</style>