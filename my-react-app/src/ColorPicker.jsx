import { useState } from 'react';

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value); //set the color to whatever that value is
    }
    return (
        <div className='color-picker-container'>
            <h1>Color Picker</h1>

            {/* the style is enclosed in a js object color */}
            <div className='color-display' style={{ backgroundColor: color }}>
                <p>Selected Color: {color} </p>
            </div>
            <label>Select a color: </label>
            <input type='color' value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker