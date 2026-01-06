export interface FlashCard {
  hiragana: string;
  romaji: string;
  english: string;
  className?: string;
  svg_illustration?: string;
  notes?: string;
}

export interface FlashCardAppProps {
  cards: FlashCard[];
}
