import React from 'react';
import { useNavigate } from 'react-router-dom';

function appl() {
    window.open('https://jobs.smartrecruiters.com/Sportradar/744000035536425-frontend-developer-react-', '_blank', 'noopener,noreferrer');
}

function Application() {

    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className='pageContainer'>
            <div className='pageContent'>
                <h1>Second Interview Phase</h1>
                <h2>Programming Skill Assessment</h2>
                <p>
                    Company: Sportradar<br></br>
                    Location: Trondheim <br></br>
                    Role: Frontend Developer (React)
                </p>
                <h2>Assessment: Create the game Wordle</h2>
                <p>
                    I need to build a web version of the Wordle game using React, following specific guidelines and game mechanics.<br></br>
                    Additionally, I must follow a Test-Driven Development (TDD) approach to ensure a thoroughly tested application.
                </p>
                <h2 >
                    Job Application
                </h2>
                <button className='regButtons' onClick={appl}>Application</button>
            </div>
            <div>
                <button className='backButton' onClick={handleClick}>Back</button>
            </div>
        </div>
    )
}

export default Application