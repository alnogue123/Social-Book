<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { PokemonService } from '../../../core/application/Services/PokemonService';
import { type Pokemon } from '../../../Types/PokemonType';

const pokemonService = new PokemonService();
const pokemons: Ref<Pokemon[]> = ref([]);
pokemonService.getAllPokemons().then((response) => {
    pokemons.value = response;
});
</script>
<template>
    <main>
        <div class="containerTag">
            <div class="imageTag">
                <img src="/src/assets/images/bookmark.svg" alt="Bookmark Icon" />
            </div>
            <h1>texto etiqueta</h1>
        </div>
        
        <div class="notes">
            <div class="note card" v-for="pokemon in pokemons" :key="pokemon.name">
                <img :src="pokemon.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ pokemon.name }} tipo {{ pokemon.type }}</h5>
                    <p class="card-text">
                        {{ pokemon.abilities }}
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped src="/src/assets/Styles/layouts/GalleryNotes.css"></style>