import { FlashCard } from "../types/FlashCard";
import "./Card.css";
import TextLine from "./TextLine";

type CardProps = {
  card: FlashCard;
  isFlipped: boolean;
  onToggleFlip: () => void;
  isColorsDeck: boolean;
};

export function Card({
  card,
  isFlipped,
  onToggleFlip,
  isColorsDeck,
}: CardProps) {
  if (isColorsDeck) {
    console.log("Card color class:", card.className, card);
  }

  return (
    <div
      className={`flashcard ${isFlipped ? "flipped" : ""}`}
      onClick={onToggleFlip}
    >
      <div
        className={`flashcard-front ${isColorsDeck ? card.className || "" : ""}`}
      >
        {isColorsDeck ? null : card.hiragana}
      </div>
      <div className="flashcard-back">
        <TextLine kind="hiragana">{card.hiragana}</TextLine>
        <TextLine kind="romanji">{card.romanji}</TextLine>
        <TextLine kind="english">{card.english}</TextLine>
      </div>
    </div>
  );
}

export default Card;
