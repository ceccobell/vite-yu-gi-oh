<script>
import filteredCards from './filterCards.vue'

export default {
    components: {
        filteredCards
    },
    props: {
        cards: Array
    }
}
</script>

<template>
    <div class="col-3 text-center mb-3" v-for="card, index in cards" :key="index">
        <img :src="card.card_images[0].image_url_small" alt="">
        <h4>{{ card.name }}</h4>
        <div>{{ card.archetype }}</div>
    </div>
</template>

<style scoped>
    img {
        width: 100%;
        height: auto;
    }
</style>