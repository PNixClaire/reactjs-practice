import { useState, useEffect} from "react";

function MyComponent() {
    
    const [count, setCount] = useState(0);

    const [color, setColor] = useState("green");

    //everytime the component re-renders, the title of the page changes
    /*
    useEffect(() => {
        document.title = `Count: ${count}`; 
    });
   */
    
    //change the title of the page only once
    /*
    useEffect(() => {
        document.title = `Count: ${count}`; 
    }, []);
    */
    
    //if the value in the array updates for any reason, change the title of the code
    useEffect(() => {
        document.title = `Count: ${count} ${color}`; 
    }, [count, color]);

    function addCount() {
        setCount(prevCount => prevCount + 1);
    }

    function subtractCount() {
        setCount(prevCount => prevCount - 1);
    }

    function changeColor() {
        setColor(prevColor => prevColor === "green" ? "red" : "green");
    }

    return (
        <>
            <p style={{color: color}}>Count: {count} </p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button> <br />
            <button onClick={changeColor}>Change Color</button>
        </>
    );
};

export default MyComponent