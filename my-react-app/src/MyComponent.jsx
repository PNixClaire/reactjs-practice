//import the react library or you can just import the function
import { useState } from "react";

function MyComponent() {
    
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();

    const [comment, setComment] = useState("");

    const [payment, setPayment] = useState("");

    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            {/* when you enter a name, it will update in real time */}
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name} </p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>
            
            {/* text area */}
            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions" />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                Pick up
                <input type="radio"
                    value="Pick up"
                    checked={shipping === "Pick up"}
                    onChange={handleShippingChange} />
            </label>
            <label>
                Delivery
                 <input type="radio"
                    value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange} />
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default MyComponent