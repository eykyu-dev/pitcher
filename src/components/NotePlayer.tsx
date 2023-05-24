import React, { useEffect, useState } from 'react';
import './NotePlayer.css';

interface NotePlayerProps {
  noteList: string[];
  handleNext: () => void;
}

interface ButtonState {
    [key: string]: boolean;
  }

function NotePlayer(props: NotePlayerProps) {
  const { noteList } = props;
  const [note, setNote] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonState, setButtonState] = useState<ButtonState>({});

  useEffect(() => {
    const initialButtonState: ButtonState = {};
    noteList.forEach((button) => {
      initialButtonState[button] = false;
    });
    setButtonState(initialButtonState);
  }, [noteList]);


  const handleButtonClick = (button: string) => {
    setButtonState((prevButtonState) => ({
      ...prevButtonState,
      [button]: !prevButtonState[button],
    }));
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * noteList.length);
    const randomNote = noteList[randomIndex];
    setNote(randomNote);

    const sound = new Audio(`public/assets/${randomNote}.wav`);
    sound.play();
    // Clean up the audio element when the component unmounts or when a new note is selected
    return () => {
      sound.pause();
      sound.currentTime = 0;
    };
  }, []);

  const replaySound = () => {
    const sound = new Audio(`public/assets/${note}.wav`);
    sound.play();

    setIsPlaying(true);

    sound.addEventListener('ended', () => {
      setIsPlaying(false);
    });
  };
  
  function playSound(toPlay: string): void{
    const sound = new Audio(`public/assets/${toPlay}.wav`);
    sound.play();
  }

  const playButtonImage = isPlaying ? 'pause.png' : 'play.png';

  return (
    <div>
      <h1>please select <br />the correct note</h1>
      <p>you can replay the sound<br /> by clicking the play button</p>
      <button className='playButton' onClick={replaySound}>
        <img src={`images/${playButtonImage}`} alt="Play" />
      </button>
      <div className="noteSelector">
        {noteList.map((noteItem) =>
          note === noteItem ? (
            <button
              key={noteItem}
              className={`noteButton ${buttonState[noteItem] ? 'correct' : ''}`}
              onClick={() => {
                playSound(noteItem);
                handleButtonClick(noteItem);
                setTimeout(() => {
                  playSound(note);
                }, 1000);
                setTimeout(() => {
                  const randomIndex = Math.floor(Math.random() * noteList.length);
                  const randomNote = noteList[randomIndex];
                  setNote(randomNote);
                  props.handleNext()
                }, 200);

              }}
            >
              {noteItem}
            </button>
          ) : (
            <button
              key={noteItem}
              className={`noteButton ${buttonState[noteItem] ? 'active' : ''}`}
              onClick={() => {
                playSound(noteItem);
                handleButtonClick(noteItem);
                setTimeout(() => {
                  playSound(note);
                }, 1000);
              }}
            >
              {noteItem}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default NotePlayer;
