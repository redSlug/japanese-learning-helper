import { useEffect, useState } from "react";
import "./App.css";
import { FlashCard } from "./types/FlashCard.ts";
import { DeckSelector } from "./components/DeckSelector.tsx";
import Card from "./components/Card.tsx";

function FlashCardApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cards, setCards] = useState<Array<FlashCard>>([]);
  const [selectedDeck, setSelectedDeck] = useState<string>("activities.json");
  const availableDecks = [
    {
      label_english: "This App",
      label_hiragana: "このあぷり",
      file: "app.json",
    },
    {
      label_english: "Activities",
      label_hiragana: "かつどう",
      file: "activities.json",
    },
    {
      label_english: "Adjectives",
      label_hiragana: "けいようし",
      file: "adjectives.json",
    },
    {
      label_english: "Classroom",
      label_hiragana: "きょうしつ",
      file: "classroom.json",
    },
    {
      label_english: "Temporal",
      label_hiragana: "じかん",
      file: "temporal.json",
    },
    { label_english: "Food", label_hiragana: "たべもの", file: "food.json" },
    {
      label_english: "Position",
      label_hiragana: "いち",
      file: "position.json",
    },
    { label_english: "Colors", label_hiragana: "いろ", file: "colors.json" },
    { label_english: "Home", label_hiragana: "いえ", file: "home.json" },
    {
      label_english: "Grammar",
      label_hiragana: "ぶんぽう",
      file: "grammar.json",
    },
    {
      label_english: "Counting",
      label_hiragana: "かぞえかた",
      file: "counting.json",
    },
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

  if (cards.length === 0)
    return <div className="no-cards">No cards available</div>;

  return (
    <div className="app-container">
      <DeckSelector
        selectedDeck={selectedDeck}
        availableDecks={availableDecks}
        onDeckChange={(value) => {
          setIsFlipped(false);
          setCurrentIndex(0);
          setSelectedDeck(value);
        }}
      />
      <div className="card-container">
        <Card
          card={cards[currentIndex]}
          isFlipped={isFlipped}
          onToggleFlip={() => setIsFlipped(!isFlipped)}
          isColorsDeck={selectedDeck === "colors.json"}
        />
      </div>

      <div className="navigation-controls">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="nav-button"
        >
          まえの
        </button>
        <span className="counter">
          かあど {currentIndex + 1} / {cards.length}
        </span>
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
}

export default FlashCardApp;
