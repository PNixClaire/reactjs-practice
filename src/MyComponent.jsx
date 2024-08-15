import { useState } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);

    function increment() {

        //this means 0 + 1 three times
        /*
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        */
        
        //this updates the value of count based on its previous value
        setCount(prevCount => prevCount + 1);
       // setCount(prevCount => prevCount + 1);
       // setCount(prevCount => prevCount + 1);

    };

    function decrement() {
        setCount(prevCount => prevCount + 1);
    };

    function reset() {
        //no need for updater function here 
        setCount(0);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
      </div>  
    );
};

export default MyComponent