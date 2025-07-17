import { useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

// RECOIL: ATOMS
import { atomPokemon } from "../../store/atoms";

// RECOIL: SELECTORS
import { selectorGetPokemon } from "../../store/selectors";

// ::
const HomePage = () => {
    // LOCAL: STATES
    const [searchPokemon, setSearchPokemon] = useState("");

    // RECOIL: STATES
    const [pokemon, setPokemon] = useRecoilState(atomPokemon);
    
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
                <div>
                    <img
                        width="150px" 
                        src={getLoadablePokemon?.contents?.sprites?.front_default}
                        alt={`pokemon-${getLoadablePokemon?.contents?.name}`} 
                    />
                    <h3>{getLoadablePokemon?.contents?.name}</h3>
                </div>
            )}
        </div>
    );
};

export default HomePage