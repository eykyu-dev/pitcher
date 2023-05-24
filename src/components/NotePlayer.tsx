import React, { useEffect, useState } from 'react';
import './NotePlayer.css';

interface NotePlayerProps {
  noteList: string[];
}

function NotePlayer(props: NotePlayerProps) {
  const { noteList } = props;
  const [note, setNote] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * noteList.length);
    const randomNote = noteList[randomIndex];
    setNote(randomNote);

    const sound = new Audio(`src/Sounds/${randomNote}.wav`);
    sound.play();

    setIsPlaying(true);

    // Clean up the audio element when the component unmounts or when a new note is selected
    return () => {
      sound.pause();
      sound.currentTime = 0;
    };
  }, []);

  const replaySound = () => {
    const sound = new Audio(`src/Sounds/${note}.wav`);
    sound.play();

    setIsPlaying(true);

    sound.addEventListener('ended', () => {
      setIsPlaying(false);
    });
  };

  const playButtonImage = isPlaying ? 'pause.png' : 'play.png';

  return (
    <div>
      <h1>please select <br />the correct note</h1>
      <p>you can replay the sound<br /> by clicking the play button</p>
      <button className='playButton' onClick={replaySound}>
        <img src={`images/${playButtonImage}`} alt="Play" />
      </button>
      <div className="noteSelector">
        {noteList.map((noteItem) => (
          <button key={noteItem} className="noteButton">
            {noteItem}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NotePlayer;
