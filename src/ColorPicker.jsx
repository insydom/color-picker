import {useState} from 'react';

function ColorPicker() {
    
    const [color, setColor] = useState('#FFFFF');

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }


    return (
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color:</label>
            <input onChange={handleColorChange} 
                   type="color" value={color} name="color" id="color"/>
        </div>
    )
}

export default ColorPicker;