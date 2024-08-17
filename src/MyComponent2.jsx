import { useState, useEffect } from "react";

function MyComponent2() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    //adds an event listener every time [bad]
    /*
    window.addEventListener("resize", handleResize);
    */
    
    //add an event listener only once
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        //cleaup or remove from DOM
        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, []); 

    //you can add more useEffect hook
    useEffect(() => {
        document.title = `Size: ${width} ${height}`;
    }, [width, height])

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    );
}

export default MyComponent2