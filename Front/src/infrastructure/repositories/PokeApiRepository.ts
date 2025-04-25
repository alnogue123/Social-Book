import axios , {type AxiosResponse, type AxiosRequestConfig } from "axios";
import type { PokemonRepository } from "../../core/application/Repository/PokemonRepository";
import type { PokemonReference } from "../dto/PokemonReferenceDto";
import type { Pokemon } from "../../core/domain/models/pokermon";
import type { PokemonListDTO } from "../dto/PokemonListDto";
import type { PokemonApiResponseDTO } from "../dto/PokemonApiDto";
import { mapApiResponseToPokemon } from "../../core/application/mappers/PokemonMapper";
import { ApiError } from "../../core/application/Errors/ApiError";

export class PokemonRepositoryImpl implements PokemonRepository {
    private readonly url: string = import.meta.env.VITE_APi_URL_POKEMON
    private readonly config: AxiosRequestConfig = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        timeout: 10000,
        timeoutErrorMessage: "Tiempo de espera agotado",
        validateStatus: (status: number) => status < 500,
        responseType: "json",
        maxRedirects: 5,
    };

    async getAllPokemons(): Promise<PokemonReference[]> {
        try {
            const res: AxiosResponse<PokemonListDTO,unknown> = await axios.get(this.url, this.config);
            return res.data.results;
        } catch (error: unknown) {
            throw new ApiError("Error al obtener los pokemones del api", 500, error);
        }
    }

    async getAll(): Promise<Pokemon[]> {
        try {
            const references: PokemonReference[] = await this.getAllPokemons();         
            const pokemons: Pokemon[] = await Promise.all(
                references.map(async (pokemonRef): Promise<Pokemon> => {
                    const res: AxiosResponse<PokemonApiResponseDTO,unknown> = await axios.get(pokemonRef.url, this.config);
                    return mapApiResponseToPokemon(res.data);
                })
            );
            return pokemons;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)){
                throw new ApiError("Error al conseguir las caracteristicas de los pokemones", error.response?.status ?? 500, error);
            }
            throw new ApiError("Error al conseguir las caracteristicas de los pokemones", 500, error);
        }
    }
}
