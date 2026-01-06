import { FlashCard } from "../types/FlashCard";
import "./Card.css";
import TextLine from "./TextLine";

type CardProps = {
  card: FlashCard;
  isFlipped: boolean;
  onToggleFlip: () => void;
  isColorsDeck: boolean;
  hasSVG: boolean;
};

export function Card({
  card,
  isFlipped,
  onToggleFlip,
  isColorsDeck,
  hasSVG,
}: CardProps) {
  if (hasSVG) {
    console.log("Card has SVG:", card);
  }

  const svgDataUrl =
    hasSVG && card.svg_illustration
      ? `data:image/svg+xml;utf8,${encodeURIComponent(card.svg_illustration)}`
      : null;

  return (
    <div
      className={`flashcard ${isFlipped ? "flipped" : ""}`}
      onClick={onToggleFlip}
    >
      <div
        className={`flashcard-front ${isColorsDeck ? card.className || "" : ""}`}
      >
        {isColorsDeck ? null : card.hiragana}

        {hasSVG && (
          <img
            className="svg-illustration"
            src={svgDataUrl!}
            alt={card.english || card.hiragana}
          />
        )}
      </div>
      <div className="flashcard-back">
        <TextLine kind="hiragana">{card.hiragana}</TextLine>
        <TextLine kind="romaji">{card.romaji}</TextLine>
        <TextLine kind="english">{card.english}</TextLine>
        {card.notes && <TextLine kind="notes">{card.notes}</TextLine>}
        {isColorsDeck && <div className={`color-swatch ${card.className}`} />}
      </div>
    </div>
  );
}

export default Card;
