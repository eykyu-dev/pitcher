import './starting.css';
import React, { useState, useEffect } from 'react';

interface ButtonState {
  [key: string]: boolean;
}

const Starting: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonState, setButtonState] = useState<ButtonState>({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const toggleButton = (buttonName: string): void => {
    setButtonState((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  return (
    <div className='content-block'>
    <div className='center'>
        <div className={`fade-in-container ${isVisible ? 'visible' : ''}`}>
            <h1>hi. <br></br>let's practice</h1>
            <p>please select the notes<br></br> you'd like to practice.</p>
            <div className='layout'>
            <button className={buttonState.button1 ? 'active' : ''} onClick={() => toggleButton('button1')}>
                C
            </button>
            <button className={buttonState.button2 ? 'active' : ''} onClick={() => toggleButton('button2')}>
                D
            </button>
            <button className={buttonState.button3 ? 'active' : ''} onClick={() => toggleButton('button3')}>
                E
            </button>
            <button className={buttonState.button4 ? 'active' : ''} onClick={() => toggleButton('button4')}>
                F
            </button>
            <button className={buttonState.button5 ? 'active' : ''} onClick={() => toggleButton('button5')}>
                G
            </button>
            </div>
                <button className='next'>Next</button>
            </div>
        </div>
    </div>
  );
};

export default Starting;
