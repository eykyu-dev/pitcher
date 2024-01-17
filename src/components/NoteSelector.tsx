// NoteSelector.tsx
import React, {useState, useEffect} from 'react';

interface ButtonState {
    [key: string]: boolean;
  }

interface NoteSelectorProps {
  buttonState: ButtonState;
  toggleButton: (buttonName: string) => void;
  handleNext: () => void;
}

const NoteSelector: React.FC<NoteSelectorProps> = ({ buttonState, toggleButton, handleNext }) => {
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(false);

  useEffect(() => {
    const selectedButtonsCount = Object.values(buttonState).filter((selected) => selected).length;
    setIsNextButtonVisible(selectedButtonsCount >= 2);
  }, [buttonState]);


  
  return (
    <div>
        <h1>hi. let's get you <br></br>perfect pitch</h1>
        <p>please select the notes<br></br> you'd like to practice.</p>
        <div className='layout'>
          <button className={buttonState.A ? 'active' : ''} onClick={() => toggleButton('A')}>
              A
          </button>
          <button className={buttonState.B ? 'active' : ''} onClick={() => toggleButton('B')}>
              B
          </button>
          <button className={buttonState.C ? 'active' : ''} onClick={() => toggleButton('C')}>
              C
          </button>
          <button className={buttonState.D ? 'active' : ''} onClick={() => toggleButton('D')}>
              D
          </button>
        </div>
        <div>
        <button className={buttonState.E ? 'active' : ''} onClick={() => toggleButton('E')}>
            E
        </button>
        <button className={buttonState.F ? 'active' : ''} onClick={() => toggleButton('F')}>
            F
        </button>
        <button className={buttonState.G ? 'active' : ''} onClick={() => toggleButton('G')}>
            G
        </button>
        </div>
        <button className="next" onClick={handleNext} style={{ display: isNextButtonVisible ? '' : 'none' }}>Next</button>
    </div>
  );
};

export default NoteSelector;
