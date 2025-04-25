import type { Pokemon } from "../../domain/models/pokermon";
import type { PokemonRepository } from "../Repository/PokemonRepository";

export class PokemonService{
    constructor(private readonly pokemonRepository: PokemonRepository){}

    async getAllPokemons() : Promise<Pokemon[]>{
        const pokemons : Pokemon[] = await this.pokemonRepository.getAll();
        return pokemons;
    }
}