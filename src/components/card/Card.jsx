import { useContext } from "react";
import { cards } from "../../characters.js";
import MemoryGameContext from "../context/provider.js";

function Card({ img, handleClick, rotate, id }) {

    const { setTime, isTimer, setIstimer, firstCard, setFirstCard, secontCard, setSecondCard, setCharacter, timer, setTimer, character, setAttempts } = useContext(MemoryGameContext);

    function timeInterval() {
        const interval = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);

        setTimer(interval);
    }

    function handleClick() {
        if(!isTimer)
            timeInterval();
            setIstimer(true);
        
        if(!firstCard)
            return setFirstCard({id, img});

        if(!secontCard) {

            if(character.length === (cards.length / 2) - 1)
                clearInterval(timer);

            return firstCard.id != id && setSecondCard({id, img});
        }

        if(secontCard.id === firstCard.id)
            return setSecondCard(null);

        setAttempts(prev => prev + 1);
        
        if(firstCard.img === secontCard.img)
            setCharacter(prev =>[...prev, firstCard.img]);

        setFirstCard(null);
        setSecondCard(null);
    }

    return ( 
        <div className={`relative cursor-pointer select-none aspect-[3/4] group ${rotate ? 'rotation' : ''}`} onClick={handleClick}>
            <img src={`public/images/${img}.png`} className="absolute group-[.rotation]:rotate-y-180 duration-500" alt="" />
            <img src="public/images/back.png" alt="" className="absolute group-[.rotation]:rotate-y-180 back-face-hidden duration-500"/>
        </div>
    );
}

export default Card;