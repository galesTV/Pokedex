import { selector } from "recoil";

// API
import { requester } from "../../api/requester";

// RECOIL: ATOMS
import { atomPokemonSearch } from "../atoms";

export const selectorGetPokemon = selector({
    key: "selectorGetPokemon",
    get: async ({ get }) => {
        const pokemon = get(atomPokemonSearch);

        if(pokemon){
            const { data } = await requester({
                baseURL: "https://pokeapi.co/api/v2",
            }).get(`/pokemon/${pokemon.toLowerCase().trim()}`);

            return data;
        }
    }
});