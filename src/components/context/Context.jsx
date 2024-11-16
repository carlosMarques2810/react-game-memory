import { useState } from "react";
import MemoryGameContext from "./provider.js";

function Context({ children }) {

    const [ inputPlayer, setInputPlayer ] = useState('');
    const [ firstCard, setFirstCard ] = useState(null);
    const [ secontCard, setSecondCard ] = useState(null);
    const [ isTimer, setIstimer ] = useState(false);
    const [ time, setTime ] = useState(0);
    const [ character, setCharacter ] = useState([]);
    const [ timer, setTimer ] = useState(null);
    const [ attempts, setAttempts ] = useState(0);

    return ( 
        <MemoryGameContext.Provider value={{
            inputPlayer, 
            setInputPlayer, 
            firstCard, 
            setFirstCard,
            secontCard, 
            setSecondCard,
            isTimer, 
            setIstimer,
            time, 
            setTime, 
            character, 
            setCharacter, 
            timer, 
            setTimer,
            attempts, 
            setAttempts
        }} >
            { children }
        </MemoryGameContext.Provider>
    );
}

export default Context;