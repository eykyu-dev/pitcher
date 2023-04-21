import './content.css'
import ButtonGrid from './ButtonGrid';

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
                    <ButtonGrid title="chords" desc="practice multiple sets of notes" />
                </div>
                <div className='notes'>
                    <ButtonGrid title="notes" desc="practice individual notes in a scale" />
                </div>
                <div className='songs'>
                    <ButtonGrid title="songs" desc="practice notes in a song" />
                </div>
            </div>
        </div>
    );
}

export default Content