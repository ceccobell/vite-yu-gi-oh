<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
            <div class="col-6 text-center">
                <h1>Numero carte generate: {{ store.cardsList.length }}</h1>
            </div>
</template>

<style scoped>
    
</style>