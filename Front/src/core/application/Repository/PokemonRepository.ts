import type { PokemonReference } from "../../../Types/PokemonReference"
import type { Pokemon } from "../../../Types/PokemonType"

export interface PokemonRepository{
    getAllPokemons() : Promise<PokemonReference[]>
    getAllPokemonWithUrl() : Promise<Pokemon[]>
}