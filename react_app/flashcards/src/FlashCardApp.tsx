// FlashCardApp.tsx
import React, { useState } from 'react';
import './FlashCardApp.css';

interface FlashCard {
    front: string;
    back: string;
}

interface FlashCardAppProps {
    cards: FlashCard[];
}

const FlashCardApp: React.FC<FlashCardAppProps> = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    if (cards.length === 0) return <div className="no-cards">No cards available</div>;

    return (
        <div className="app-container">
            <div className="card-container">
                <div
                    className={`flashcard ${isFlipped ? 'flipped' : ''}`}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    <div className="flashcard-front">
                        {cards[currentIndex].front}
                    </div>
                    <div className="flashcard-back">
                        {cards[currentIndex].back}
                    </div>
                </div>
            </div>

            <div className="navigation-controls">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="nav-button"
                >
                    Previous
                </button>
                <span className="counter">Card {currentIndex + 1} of {cards.length}</span>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === cards.length - 1}
                    className="nav-button"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default FlashCardApp;
