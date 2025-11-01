import "./DeckSelector.css";
import { Deck } from "../types/Deck";

type DeckSelectorProps = {
  selectedDeck: string;
  availableDecks: Deck[];
  onDeckChange: (value: string) => void;
};

export function DeckSelector({
  selectedDeck,
  availableDecks,
  onDeckChange,
}: DeckSelectorProps) {
  return (
    <div className="deck-selector">
      <select
        value={selectedDeck}
        onChange={(e) => onDeckChange(e.target.value)}
      >
        {availableDecks.map((d) => (
          <option key={d.file} value={d.file}>
            {d.label_hiragana} ({d.label_english})
          </option>
        ))}
      </select>
    </div>
  );
}
