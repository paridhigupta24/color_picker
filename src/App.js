import React, { useState } from 'react';

const App = () => {
    const [selectedColor, setSelectedColor] = useState('#ffffff');

    const colorOptions = [
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#ffff00',
        '#ff00ff',
        '#00ffff',
        '#ff9900',
        '#9900cc',
        '#009900',
        '#3366cc',
        '#cc0033',
        '#ff66b2',
        '#669999',
        '#ffcc00',
        '#9966cc',
    ];

    const changeColor = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Color Picker</h1>
            <div className="flex justify-center flex-wrap bg-yellow-200 p-4 rounded-xl shadow-lg">
                {colorOptions.map((color, index) => (
                    <button
                        key={index}
                        onClick={() => changeColor(color)}
                        style={{ backgroundColor: color, width: '40px', height: '40px', margin: '5px' }}
                        className="shadow shadow-black hover:opacity-80 focus:outline-none"
                    ></button>
                ))}
            </div>
            <div className="p-4 mx-auto">
                <div className="mx-auto w-64 h-64 sm:w-96 sm:h-96 md:w-96 md:h-96 lg:w-96 lg:h-96 xl:w-96 xl:h-96 bg-gray-200 rounded-xl shadow shadow-black shadow-md" style={{ backgroundColor: selectedColor }}></div>
            </div>
        </div>
    );
};

export default App;