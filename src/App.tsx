import {useEffect, useState} from 'react';
import './App.css';
import {FlashCard} from "./types/FlashCard.ts";

function FlashCardApp() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [cards, setCards] = useState<Array<FlashCard>>([]);
    const [selectedDeck, setSelectedDeck] = useState<string>('activities.json');
    const availableDecks = [
        { label_english: "This App", label_hiragana: "このあぷり", file: "app.json" },
        { label_english: "Activities", label_hiragana: "かつどう", file: "activities.json" },
        { label_english: "Adjectives", label_hiragana: "けいようし", file: "adjectives.json" },
        { label_english: "Classroom", label_hiragana: "きょうしつ", file: "classroom.json" },
        { label_english: "Temporal", label_hiragana: "じかん", file: "temporal.json" },
        { label_english: "Food", label_hiragana: "たべもの", file: "food.json" },
        { label_english: "Position", label_hiragana: "いち", file: "position.json" },
        { label_english: "Colors", label_hiragana: "いろ", file: "colors.json" },
        { label_english: "Home", label_hiragana: "いえ", file: "home.json" },
        { label_english: "Grammar", label_hiragana: "ぶんぽう", file: "grammar.json" },
        { label_english: "Counting", label_hiragana: "かぞえかた", file: "counting.json" }
    ];

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(selectedDeck);
            const jsonData = await response.json();
            setCards(jsonData);
        };
        fetchData();
    }, [selectedDeck]);


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
            <div style={{ position: 'absolute', top: 12, right: 12 }}>
                <select
                    value={selectedDeck}
                    onChange={(e) => {
                        setIsFlipped(false);
                        setCurrentIndex(0);
                        setSelectedDeck(e.target.value);
                    }}
                >
                    {availableDecks.map((d) => (
                        <option key={d.file} value={d.file}>{d.label_hiragana} ({d.label_english})</option>
                    ))}
                </select>
            </div>
            <div className="card-container">
                <div
                    className={`flashcard ${isFlipped ? 'flipped' : ''}`}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    <div className="flashcard-front">
                        {cards[currentIndex].hiragana}
                    </div>
                    <div className="flashcard-back">
                        {cards[currentIndex].romanji}
                        <br />
                        <br />
                        {cards[currentIndex].english}
                    </div>
                </div>
            </div>

            <div className="navigation-controls">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="nav-button"
                >
                    まえの
                </button>
                <span className="counter">かあど {currentIndex + 1} / {cards.length}</span>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === cards.length - 1}
                    className="nav-button"
                >
                    つぎの
                </button>
            </div>
        </div>
    );
    };

export default FlashCardApp;
