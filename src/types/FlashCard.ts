
export interface FlashCard {
    hiragana: string;
    romanji: string;
    english: string;
}

export interface FlashCardAppProps {
    cards: FlashCard[];
}
