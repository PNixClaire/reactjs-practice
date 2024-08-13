//import the react library or you can just import the function
import { useState } from "react";

function MyComponent() {
    
    //name is Guest by default
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        //the setter will trigger a re-render of the virtual DOM so the change will be rendered immediately
        setName("Spongebob");
    }

    const incrementAge = () => {
        setAge(age+1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (<div>
        <p>Name: {name}</p>
        {/* but when the user clicks the button, the name will be reset */}
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        {/* everytime user clicks the button, icrement the age by 1 */}
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>)
}

export default MyComponent