import { useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

// RECOIL: ATOMS
import { atomPokemonSearch } from "../../store/atoms";

// RECOIL: SELECTORS
import { selectorGetPokemon } from "../../store/selectors";
import Card from "../../components/Card";

// ::
const HomePage = () => {
    // LOCAL: STATES
    const [searchPokemon, setSearchPokemon] = useState("");

    // RECOIL: STATES
    const [pokemon, setPokemon] = useRecoilState(atomPokemonSearch);
    
    // RECOIL: LOADABLE 
    const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon);

    return (
        <div>
            <input 
                type="text" 
                onChange={(event) => setSearchPokemon(event.target.value)} 
            />
            <button onClick={() => setPokemon(searchPokemon)}>Procurar</button>
            {getLoadablePokemon?.state == "loading" && <div>Loading...</div>}
            {getLoadablePokemon?.state == "hasValue" && 
                getLoadablePokemon?.contents !== undefined && (
                <Card 
                    type={getLoadablePokemon?.contents?.types[0]?.type.name}
                    id={getLoadablePokemon?.contents?.id}
                    preview={getLoadablePokemon?.contents?.sprites?.versions?.[
                        "generation-v"
                    ]?.["black-white"].animated?.front_default}
                    image={getLoadablePokemon?.contents?.sprites?.other?.dream_world
                        ?.front_default
                    }
                    name={getLoadablePokemon?.contents?.name}
                />
            )}
        </div>
    );
};

export default HomePage