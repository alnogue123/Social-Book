import { PokemonRepositoryImpl } from "../../../infrastructure/repositories/PokeApiRepository";
import type { Pokemon } from "../../../Types/PokemonType";

export class PokemonService{
    private readonly pokemonRepository: PokemonRepositoryImpl;
    constructor() {
        this.pokemonRepository = new PokemonRepositoryImpl();
    }

    async getAllPokemons() : Promise<Pokemon[]>{
        const pokemons : Pokemon[] = await this.pokemonRepository.getAllPokemonWithUrl();
        return pokemons;
    }
}