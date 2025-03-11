import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {

    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/Rules');
    };
    const handleCand = () => {
        navigate('/Candidate');
    };
    const handleSport = () => {
        navigate('/Sportradar');
    };
    const handleAppli = () => {
        navigate('/Application');
    };
    const play = () => {
        navigate('/Wordle');
    };


    return (
        <div className='welcome'>
            <div className='welTop'>
                <button className='regButtons' onClick={handleCand}>Candidate Info</button>
                <button className='regButtons' onClick={handleSport}>Sportradar Info</button>
                <button className='regButtons' onClick={handleAppli}>Application Details</button>
                <button className='regButtons' id='rulesButton' onClick={handleClick}>Game Rules</button>
            </div>
            <div className='welMid'>
                <button onClick={play} className='playButton'>PLAY WORDLE</button>
            </div>
        </div>
    )
}

export default Welcome