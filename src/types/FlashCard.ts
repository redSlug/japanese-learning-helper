
export interface FlashCard {
    hiragana: string;
    romanji: string;
    english: string;
    className?: string;
}

export interface FlashCardAppProps {
    cards: FlashCard[];
}
