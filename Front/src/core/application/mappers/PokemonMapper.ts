import type { PokemonApiResponseDTO } from "../../../infrastructure/dto/PokemonApiDto";
import type { Pokemon } from "../../domain/models/pokermon";

export const mapApiResponseToPokemon = (response: PokemonApiResponseDTO): Pokemon => {
    return {
        name: response.name,
        image: response.sprites.front_default,
        abilities: response.abilities.map((ability) => ability.ability.name).join(", "),
        types: response.types.map((type) => type.type.name).join(", ")
    };
};