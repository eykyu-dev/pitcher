import './content.css';
import React, { Component, useState, useEffect } from 'react';
import NoteSelector from './NoteSelector';

interface ButtonState {
  [key: string]: boolean;
}

const Content: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [buttonState, setButtonState] = useState<ButtonState>({
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
  });

  const FadeIn = () => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  };

  const FadeOut = () => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    FadeIn();
  }, [])

  const toggleButton = (buttonName: string): void => {
    setButtonState((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  const handleNext = (): void => {
    setIsVisible(false);
    setCurrentStep(currentStep + 1);
    FadeIn();
  };

  const getPressedButtons = (): string[] => {
    return Object.keys(buttonState).filter((buttonName) => buttonState[buttonName]);
  };

  const steps = [<NoteSelector buttonState={buttonState} toggleButton={toggleButton} handleNext={handleNext}/>, <div><p>test</p></div>]


  return (
    <div className='content-block'>
      <div className='center'>
        <div className={`fade-in-container${isVisible ? '-visible' : ''}`}>
          {steps[currentStep]}
        </div>
      </div>
    </div>
  );
};

export default Content;
