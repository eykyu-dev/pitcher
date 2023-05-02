import './content.css'
import Buttons from './buttons';

function Content(){
    return(
        <div className='content-block'>
            <div className='headers'>
                <h1>great work!</h1>
                <p>let's check your progress</p>
            </div>
            <div className='graph'>
            </div>
            <div className='buttons'>
                <div className='chords'>
                    <Buttons title="chords" desc="practice multiple sets of notes" />
                </div>
                <div className='notes'>
                    <Buttons title="notes" desc="practice individual notes in a scale" />
                </div>
                <div className='songs'>
                    <Buttons title="songs" desc="practice notes in a song" />
                </div>
            </div>
        </div>
    );
}

export default Content