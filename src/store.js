import { reactive } from "vue";

export const store = reactive({
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=24&offset=2",
    cardsList: [],
    isLoading: true,
    selectApiUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archetypes: []
})