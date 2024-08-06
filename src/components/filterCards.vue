<script>
import { store } from '../store';
import numCards from './numCards.vue'

export default {
    components: {
        numCards
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-6 d-flex align-items-center">
                <select class="form-select" aria-label="Default select example" @change="$emit('filter_cards')" v-model="store.archetypeSelected">
                  <option selected>select archetype</option>
                  <option v-for="archetype, index in store.archetypesList" :key="index" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
                </select>
            </div>
            <numCards />
        </div>
    </div>
</template>

<style scoped>
    
</style>