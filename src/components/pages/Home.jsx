import { useContext } from "react";
import  MemoryGameContext  from '../context/provider.js'
import { useNavigate } from "react-router-dom";

function Home() {

    const { inputPlayer, setInputPlayer } = useContext(MemoryGameContext);

    const navigate = useNavigate();

    return ( 
        <div className="w-full h-screen flex justify-center items-center">
            <form className="flex flex-col *:text-center" onSubmit={(e) => e.preventDefault()}>
                <div className="my-8">
                    <img src="/images/brain.png" className="h-36 w-36 mx-auto md:h-56 md:w-56" alt="Cerebro" />
                    <h1 className="w-full text-center text-3xl md:text-5xl font-semibold">Memory Game</h1>
                </div>
                <input 
                    className="md:text-2xl w-full p-2 mb-8 border-b-2 border-zinc-500 focus:outline-none focus:border-zinc-400" 
                    type="text" 
                    value={inputPlayer}
                    placeholder="Nome do Player" 
                    onChange={({ target }) => setInputPlayer(target.value)}
                />
                <button 
                    className="md:text-2xl bg-red-500 py-2 rounded-md text-zinc-100 duration-100 disabled:bg-zinc-600 disabled:text-zinc-50" 
                    type="submit"
                    disabled={ inputPlayer.length < 4 ? true : false } 
                    onClick={() => {
                        navigate('/game');
                    }}
                >Play</button>
            </form>
        </div>
    );
}

export default Home;