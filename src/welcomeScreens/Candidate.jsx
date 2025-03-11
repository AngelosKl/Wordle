import React from 'react';
import { useNavigate } from 'react-router-dom';


function portfolioF() {
    window.open('https://my-react-app-phi-wine.vercel.app/', '_blank', 'noopener,noreferrer');
}

function Candidate() {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    return (
        <div className='pageContainer'>
            <div className='pageContent'>
                <h2>Canditate Details:</h2>
                <p>
                    Name: Angelos Klimantiris <br></br>
                    Age: 26<br></br>
                    Sex: Male<br></br>
                    Nationality: Greek<br></br>
                    Mobile: NOR +4797365604<br></br>
                    Email: aklimantiris98@gmail.com<br></br>
                </p>
                <h3>
                    More info on my portfolio:
                </h3>
                <button className='regButtons' onClick={portfolioF}>
                    Portfolio
                </button>
            </div>
            <div>
                <button className='backButton' onClick={handleClick}>Back</button>
            </div>
        </div>
    )
}

export default Candidate