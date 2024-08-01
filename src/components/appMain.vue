<script>
import { store } from '../store.js'
import cards from './appCards.vue'
import loader from './appLoader.vue'

export default {
    components: {
        cards,
        loader
    },
    data() {
        return {
            store
        }
    }
}
</script>
    
<template>
    <div class="d-flex justify-content-center" v-if="store.isLoading">
        <loader />
    </div>
    <div class="container">
        <div class="row">
            <cards :cards="store.cardsList" />
        </div>
    </div>
</template>

<style>
    
</style>