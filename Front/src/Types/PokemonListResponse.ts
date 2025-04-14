import type { PokemonReference } from "./PokemonReference";

export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonReference[];
}