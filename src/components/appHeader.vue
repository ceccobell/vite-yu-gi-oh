<script>
import { store } from '../store.js'
import select_type from '../components/archetypeSelect.vue'

export default {
  components: {
    select_type
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 d-flex p-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXw-NuLf9rw9G_6TaJ40-uAxlX5LUBNy94Q&s" alt="">
        <h1>Yu-Gi-Oh API</h1>
      </div>
      <select_type />
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100px;
  height: auto;
}
</style>
