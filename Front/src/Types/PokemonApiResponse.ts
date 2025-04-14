export interface PokemonApiResponse {
    name: string;
    sprites: {
        front_default: string;
    };
    abilities: {
        ability: {
            name: string;
        };
    }[];
    types: {
        type: {
            name: string;
        };
    }[];
}