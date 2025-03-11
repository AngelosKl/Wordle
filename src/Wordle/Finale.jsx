import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Finale() {
    const location = useLocation();
    const navigate = useNavigate();
    const { result, correctWord } = location.state || {};

    const handleRetry = () => {
        setTimeout(() => {
            window.location.reload();
        }, 100)
        navigate('/Wordle');
    };
    const handleMenu = () => {
        setTimeout(() => {
            window.location.reload();
        }, 100)
        navigate('/');
    }

    return (
        <div className="pageContainer">
            <div className="pageContent">
                <h1>{result === "win" ? "🎉 Congratulations! You won!" : "😢 Game Over!"}</h1>
                <p>The correct word was: <strong>{correctWord}</strong></p>
                <div className="finale-buttons">
                    <button className="regButtons" onClick={handleMenu}>🏠 Home</button>
                    <button className="retryButton" onClick={handleRetry}>🔄 Retry</button>
                </div>
            </div>
        </div>
    );
}

export default Finale;
