import React from 'react';
import { useNavigate } from 'react-router-dom';


function Rules() {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    return (
        <div className='pageContainer'>
            <div className='pageContent'>
                <h2>Game Rules</h2>
                <ul>
                    <li>You have 5 guesses.</li>
                    <li>All words are 5 letters long.</li>
                    <li>
                        The guesser gets the feedback about any letters in their guess <br></br>
                        that are in the right position with a green highlight, while letters <br></br>
                        that are in the word but not in the correct position will get a yellow outline.<br></br>
                    </li>
                    <li>
                        The yellow highlight will not show up if you have more of a letter than in the corret answer.<br></br>
                        <ul>
                            <li>Example: if the correct word is WATER and you guess OTTER, the first T <br></br>
                                must not get a yellow highlight.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='rulesBot'>
                <button className='backButton' onClick={handleClick}>Back</button>
            </div>
        </div>
    )
}

export default Rules