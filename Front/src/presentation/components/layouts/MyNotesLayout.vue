<script setup lang="ts">
import { ref, computed } from 'vue';
import { PokemonService } from '../../../core/application/Services/PokemonService';
import { PokemonRepositoryImpl } from '../../../infrastructure/repositories/PokeApiRepository';
import type { Pokemon } from '../../dto/PokemonDto';
import NoteDialog from '../ui/NoteDialog.vue';


const mapToDTO = (pokemon: Pokemon): Pokemon => ({
    name: pokemon.name,
    image: pokemon.image,
    abilities: pokemon.abilities,
    types: pokemon.types,
});

const pokemonService = new PokemonService(new PokemonRepositoryImpl());
const pokemons = ref<Pokemon[]>([]);
const loading = ref(true);

pokemonService.getAllPokemons()
    .then((response) => {
        pokemons.value = response.map(mapToDTO);
        loading.value = false;
    })
    .catch((error) => console.error("Error:", error));

const isEmpty = computed(() => !loading.value && pokemons.value.length === 0);
</script>
<template>
    <main class="container">
        <div class="emptynotes" v-if="isEmpty">
            <h1>What are we going to be inspired by today?</h1>
        </div>
        <div class="notes" v-if="!isEmpty">
            <div class="note card" v-for="pokemon in pokemons" :key="pokemon.name">
                <img :src="pokemon.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ pokemon.name }} tipo {{ pokemon.types }}</h5>
                    <p class="card-text">
                        {{ pokemon.abilities }}
                    </p>
                </div>
            </div>
        </div>
    </main>
    <NoteDialog />
</template>
<style scoped src="/src/assets/Styles/layouts/MyNotesLayout.css"></style>