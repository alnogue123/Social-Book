import type { Pokemon } from "../../domain/models/pokermon"
import type { PokemonReference } from "../../../infrastructure/dto/PokemonReferenceDto"

export interface PokemonRepository{
    getAllPokemons() : Promise<PokemonReference[]>
    getAll() : Promise<Pokemon[]>
}