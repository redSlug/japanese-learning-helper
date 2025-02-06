import {useEffect, useState} from 'react';
import './App.css';
import {FlashCard} from "./types/FlashCard.ts";

function FlashCardApp() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [cards, setCards] = useState<Array<FlashCard>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('cards.json'); // Assuming data.json is in the public folder
            const jsonData = await response.json();
            setCards(jsonData);
        };

        fetchData();
    }, []);


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
                        {cards[currentIndex].english}
                    </div>
                    <div className="flashcard-back">
                        {cards[currentIndex].hiragana}
                        <br />
                        {cards[currentIndex].romanji}
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
