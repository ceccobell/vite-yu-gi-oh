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
    <div class="container">
        <div class="row">
            <div class="col-3 text-center mb-3" v-for="card, index in store.cardsList" :key="index">
                <img :src="card.card_images[0].image_url_small" alt="">
                <h4>{{ card.name }}</h4>
                <div>{{ card.archetype }}</div>
            </div>
        </div>
    </div>
</template>

<style>
    img {
        width: 100%;
        height: auto;
    }
</style>