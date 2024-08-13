function Button() {

    //this will be called when user clicks the button
    /*
    const handleClick = () => console.log("OUCH!");
    return (<button onClick={handleClick}> Click me! </button >);
    */
    
    //this function accepts a name parameter and gets called when the button is clicked
    /*
    const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    return(<button onClick={() => handleClick2("Bro")}>Click me!</button>)
    */

    //this have different click events for different conditions
    //let count = 0;
    //use curly braces when you have more than 1 line of code
    /*
    const handleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else {
            console.log(`${name} stop clicking me!`);
        }
    };
    
    //wrap the event handler in arrow function
    return (<button onClick={() => handleClick("Bro")}>Click me!</button>);
    */

    //when you click the button, the text will change
    /*
    const handleClick = (e) => e.target.textContent = "Ouch!";

    return (<button onClick={(e) => handleClick(e)}>Click me!</button>);
    */

    //the text will change when you double click the button
    const handleClick = (e) => e.target.textContent = "OUCH!";
    return (<button onDoubleClick={(e) => handleClick(e)}>Click me!</button>);
}
export default Button