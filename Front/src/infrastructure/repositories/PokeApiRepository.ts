import axios from "axios";
import type { AxiosResponse, AxiosRequestConfig } from "axios";
import type { PokemonRepository } from "../../core/application/Repository/PokemonRepository";
import type { PokemonReference } from "../../Types/PokemonReference";
import type { Pokemon } from "../../Types/PokemonType";
import type { PokemonListResponse } from "../../Types/PokemonListResponse";
import type { PokemonApiResponse } from "../../Types/PokemonApiResponse";

export class PokemonRepositoryImpl implements PokemonRepository {
    private readonly url: string = "https://pokeapi.co/api/v2/pokemon"
    private readonly config: AxiosRequestConfig = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    };

    async getAllPokemons(): Promise<PokemonReference[]> {
        const res: AxiosResponse<PokemonListResponse, Error> = await axios.get(this.url, this.config);
        return res.data.results;
    }

    async getAllPokemonWithUrl(): Promise<Pokemon[]> {
        const references = await this.getAllPokemons();
        const pokemons: Pokemon[] = await Promise.all(
            references.map(async (pokemonRef) => {
                const res = await axios.get<PokemonApiResponse>(pokemonRef.url, this.config);
                return {
                    name: res.data.name,
                    image: res.data.sprites.front_default,
                    abilities: this.extractAbilities(res.data.abilities),
                    type: this.extractTypes(res.data.types),
                };
            })
        );
        console.log(pokemons);
        return pokemons;
    }

    private extractAbilities(abilities: { ability: { name: string } }[]): string {
        return abilities.map(this.getAbilityName).join(", ");
    }

    private getAbilityName(ability: { ability: { name: string } }): string {
        return ability.ability.name;
    }

    private extractTypes(types: { type: { name: string } }[]): string {
        return types.map(this.getTypeName).join(", ");
    }
    
    private getTypeName(type: { type: { name: string } }): string {
        return type.type.name;
    }
}
