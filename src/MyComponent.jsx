import { useState } from "react";

function MyComponent() {
    
    //car will be an object with these properties
    const [car, setCar] = useState({
        year: 2024,
        make: "Suzuki",
        model: "Jimny"
    });

    function handleYearChange(event) {
        //this will add a new year property for the car and if you have two properties with the same name of different values, you will use the latest
        //setCar({ ...car, year: event.target.value});

        setCar(prevCar => ({...prevCar, year: event.target.value}));
    }

    function handleMakeChange(event) {
        setCar(prevCar => ({ ...prevCar, make: event.target.value }));
    }

    function handleModelChange(event) {
        setCar(prevCar => ({ ...prevCar, model: event.target.value }));
    }

    return (
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
            <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
            <input type="text" value={car.model} onChange={handleModelChange}/> <br/>
       </div>
    );
};

export default MyComponent