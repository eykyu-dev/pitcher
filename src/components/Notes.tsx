import React, { useState } from 'react';
import './Notes.css'
function Notes(){
    interface ButtonState {
        [key: string]: boolean;
    }

    const [buttonState, setButtonState] = useState({
        button1: false,
        button2: false,
        button3: false,
        button4: false,
        button5: false,
      });
   
      const ToggleButton: React.FC = () => {
        const [buttonState, setButtonState] = useState<ButtonState>({
          button1: false,
          button2: false,
          button3: false,
          button4: false,
          button5: false,
        });
        }
        const toggleButton = (buttonName: string): void => {
            setButtonState((prevState) => ({
              ...prevState,
              [buttonName]: !prevState[buttonName],
            }));
          };
      
    return(
        <div className='layout'>
                <button className={buttonState.button1 ? 'active' : ''} onClick={() => toggleButton('button1')}>C</button>
                <button className={buttonState.button2 ? 'active' : ''} onClick={() => toggleButton('button2')}>D</button>
                <button className={buttonState.button3 ? 'active' : ''} onClick={() => toggleButton('button3')}>E</button>
                <button className={buttonState.button4 ? 'active' : ''} onClick={() => toggleButton('button4')}>F</button>
                <button className={buttonState.button5 ? 'active' : ''} onClick={() => toggleButton('button5')}>G</button>

        </div>
    );
}

export default Notes