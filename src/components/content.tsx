import './content.css';
import React, { Component, useState, useEffect } from 'react';
import NoteSelector from './NoteSelector';
import Noteplayer from './NotePlayer';
interface ButtonState {
  [key: string]: boolean;
}

const Content: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [buttonState, setButtonState] = useState<ButtonState>({
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
  });
  useEffect(() => {FadeIn()},[currentStep])


  const FadeIn = () => {
    setIsVisible(true);
    const timer = setTimeout(() => {
    }, 500);

    return () => clearTimeout(timer);
  };


  const toggleButton = (buttonName: string): void => {
    setButtonState((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  const handleNext = (): void => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentStep(currentStep +1);
    }, 500);
  };

  const getPressedButtons = (): string[] => {
    return Object.keys(buttonState).filter((buttonName) => buttonState[buttonName]);
  };

  const steps = [<NoteSelector buttonState={buttonState} toggleButton={toggleButton} handleNext={handleNext}/>,
  <Noteplayer noteList={getPressedButtons()} handleNext={handleNext}></Noteplayer>,
  <Noteplayer noteList={getPressedButtons()} handleNext={handleNext}></Noteplayer>,
  <Noteplayer noteList={getPressedButtons()} handleNext={handleNext}></Noteplayer>,
  <Noteplayer noteList={getPressedButtons()} handleNext={handleNext}></Noteplayer>,
  <Noteplayer noteList={getPressedButtons()} handleNext={handleNext}></Noteplayer>,
  <Noteplayer noteList={getPressedButtons()} handleNext={handleNext}></Noteplayer>,
  <Noteplayer noteList={getPressedButtons()} handleNext={handleNext}></Noteplayer>,
  <Noteplayer noteList={getPressedButtons()} handleNext={handleNext}></Noteplayer>
]


  return (
    <div className='content-block'>
        <div className={`fade-in-container${isVisible ? '-visible' : ''}`}>
          {steps[currentStep]}
        </div>
    </div>
  );
};

export default Content;
