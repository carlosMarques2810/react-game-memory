import { useContext } from "react";
import { cards as characters } from "../../characters.js"; 
import Card from "../card/Card.jsx";
import MemoryGameContext from "../context/provider.js";
import { v4 } from "uuid";

let cards = [];

characters.map((character) => {
    cards = [...cards, {
        id: v4(),
        character
    }];
});

function Game() {

    const { inputPlayer, firstCard, secontCard, time, character, attempts } = useContext(MemoryGameContext);


    return ( 
        <div className="w-screen h-screen bg-[url('public/images/bg.jpg')] bg-cover bg-center flex">
            <div className="h-full mx-auto">
                <header>
                    <div className="flex items-center justify-between bg-zinc-200 px-4 py-4 mb-4">
                        <h1 className="text-2xl font-mono font-bold">
                            { inputPlayer }
                        </h1>
                        <div className="flex gap-20 items-center">
                            <div className="font-2xl font-serif flex items-center">time: <span className=" text-xl font-bold ml-2 w-[3ch]">{time < 10 ? `0${time}` : time}</span></div>
                            <div className="font-2xl font-serif flex items-center">try: <span className="text-xl font-bold ml-2 w-[3ch]">{attempts < 10 ? `0${attempts}` : attempts}</span></div>
                        </div>
                    </div>
                </header>
                <main className="grid grid-cols-5 gap-4 w-[540px] mx-auto">
                    { cards.map((card) => (
                        <Card
                            img={card.character}
                            key={card.id}
                            rotate={card.id === firstCard?.id || card.id === secontCard?.id || character.some( c => c === card.character) ? true : false}
                            id={card.id}
                        />
                    ))}
                </main>
            </div>
        </div>
    );
}

export default Game;