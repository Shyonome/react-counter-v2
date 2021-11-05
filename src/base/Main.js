import { useState } from "react";
import Counter from "../components/Counter";

const Main = () => {

    const [counter, setCounter] = useState([0]);
    
    const newCounter = [...counter];

    return (
        <div>
            <main>
                {counter.length < 3 ?
                <button onClick = {() => {
                    newCounter.push(counter);
                    setCounter(newCounter);
                }} >Add Counter</button>
                : null}
                <Counter counter = {newCounter} setCounter = {setCounter} />
            </main>
        </div>
    );
}

export default Main;