<script>
import { store } from '../store.js'
import cards from './cards.vue'

export default {
    components: {
        cards
    },
    data() {
        return {
            store
        }
    }
}
</script>
    
<template>
    <div class="container">
        <div class="row">
            <cards :cards="store.cardsList" />
        </div>
    </div>
</template>

<style>
    
</style>