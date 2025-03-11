import React from 'react';
import { useNavigate } from 'react-router-dom';


function sportSite() {
    window.open('https://sportradar.com/', '_blank', 'noopener,noreferrer');
}


function Sportradar() {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className='pageContainer'>
            <div className='pageContent'>
                <h2>About</h2>
                <p>
                    Sportradar is an international leading sports technology company creating immersive experiences for fans, <br></br>
                    positioned at the intersection of the sports, media and betting industries.
                </p>
                <h2>Mission</h2>
                <p>
                    Sportradar provides cutting-edge data and technology to empower sports organizations, media outlets, and betting companies.<br></br>
                    Sportradar's mission is to enhance the global sports ecosystem through innovation, integrity, and engagement.
                </p>
                <h3>
                    Learn more..
                </h3>
                <button className='regButtons' onClick={sportSite}>
                    Sportradar
                </button>
            </div>
            <div>
                <button className='backButton' onClick={handleClick}>Back</button>
            </div>
        </div>
    )
}

export default Sportradar