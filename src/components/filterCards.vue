<script>
import { store } from '../store';
import axios from 'axios'

export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="col-6 d-flex align-items-center">
        <select class="form-select" aria-label="Default select example" @change="$emit('filter_cards')" v-model="store.archetypeSelected">
          <option selected>select archetype</option>
          <option v-for="archetype, index in store.archetypesList" :key="index" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>

<style scoped>
    
</style>