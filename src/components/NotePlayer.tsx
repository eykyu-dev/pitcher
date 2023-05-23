import React from "react";
import './NotePlayer.css'

interface NotePlayerProps {
  noteList: string[];
}

function NotePlayer(props: NotePlayerProps) {
  const { noteList } = props;

  return (
    <div>
      <h1>please select <br></br>the correct note</h1>
      <p>you can replay the sound<br></br> by clicking the play button below.</p>
      <button className='playButton'>
        <img src="src/images/play.png" alt="Play" />
      </button>
      <div className="noteSelector">
        {noteList.map((note) => (
            <button key={note} className="noteButton">
                {note}
            </button>
        ))}
      </div>
    </div>
  );
}

export default NotePlayer;
