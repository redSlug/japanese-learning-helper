export interface FlashCard {
  hiragana: string;
  romanji: string;
  english: string;
  className?: string;
  svg_illustration?: string;
}

export interface FlashCardAppProps {
  cards: FlashCard[];
}
