import './App.css';
import { useState } from 'react';

function ColorButton({ color, onClick }) {
  return (
    <button
      className="color-button"
      style={{
        backgroundColor: color,
      }}
      onClick={onClick}
    >
    </button>
  )
}

function ColorPallete({ colors, handleClick }) {
  const colorButtons = colors.map((color) => {
    return <ColorButton key={color} color={color} onClick={() => handleClick(color)} />;
  })

  return (
    <div className='color-pallete'>
      {colorButtons}
    </div>
  )
}

function Canvas({colors}) {
  const [bgColor, setBgColor] = useState('white');

  function handleClick(color) {
    setBgColor(color);
  }

  return (
    <div className="canvas" style={{ backgroundColor: bgColor }}>
      <ColorPallete colors={colors} handleClick={handleClick} />
    </div>
  )
}

export default function App() {
  const colors = [];
  function generateRandomColor() {
    const hexCharString = `0123456789ABCDEF`;
    let hexColor = `#`;
    for (let i = 0; i < 6; i++) {
      hexColor += hexCharString[Math.floor(Math.random() * 16)];
    }
    return hexColor;
  }

  for (let i = 0; i < 10; i++) {
    colors.push(generateRandomColor());
  }
  return (
    <Canvas colors={colors} />
  );
}