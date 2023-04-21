import './content.css'

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
                <div className='button-titles'>
                    <p className='text'>chords</p>
                    <p className='text'>notes</p>
                    <p className='text'>songs</p>
                </div>
                <div className='button-descript'>
                    <p className='descript'>chords</p>
                    <p className='descript'>notes</p>
                    <p className='descript'>songs</p>
                </div>
                <div className='button-buttons'>
                    <button className='button'></button>
                    <button className='button'></button>
                    <button className='button'></button>
                </div>
            </div>
        </div>
    );
}

export default Content