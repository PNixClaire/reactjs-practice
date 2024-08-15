import { useState } from "react";

function MyComponent() {
    
    const [foods, setFoods] = useState([
        "Apple",
        "Orange",
        "Banana"
    ]);

    function handleAddfood() {
        const newFood = document.getElementById("foodInput").value; //get the input value
        document.getElementById("foodInput").value = ""; //empty value to clear the input field after submit

        //this will add a new element to the array
        setFoods(prevFood => [...prevFood, newFood ]);
    }

    function handleRemoveFood(index) {

        //filter those elements whose index does not equal the selected one
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index}
                        onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter food" />
            <button onClick={handleAddfood}>Add Food</button>
        </div>
    );
};

export default MyComponent