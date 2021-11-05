const Counter = ({ counter, setCounter }) => {
    return (
        <div>

            {counter.map((elem, index) => {
                return (

                    <div key = {index} className = "counter" >

                        <button onClick = {() => {
                            setCounter(counter - 1)
                        }}>-</button>

                        <span>{counter}</span>

                        <button onClick = {() => {

                        }} >+</button>

                        <button onClick = {() => {

                        }} >Reset</button>

                    </div>

                );
            })}

        </div>
    );
}

export default Counter;