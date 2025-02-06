import './App.css'
import FlashCardApp from "./FlashCardApp.tsx";


function App() {


    const sampleCards =
        [{hiragana: "きょうしつのことば", romanji: "Kyoshitsu no Kotoba", english: "Classroom Phrases"}, {hiragana: "はい・いいえ", romanji: "hai・iie", english: "Yes・No"}, {hiragana: "ありがとう(ございます)。", romanji: "Arigato (gozaimasu)", english: "Thank you (formal)"}, {hiragana: "わかりますか？", romanji: "Wakarimasu ka?", english: "Do you understand?"}, {hiragana: "はい、わかります。", romanji: "Hai, wakarimasu.", english: "Yes, I do (understand)."}, {hiragana: "いいえ、わかりません。", romanji: "Iie, wakarimasen.", english: "No, I donʼt (understand)."}, {hiragana: "すこしわかります。", romanji: "Sukoshi wakarimasu.", english: "(I understand) a little."}, {hiragana: "もういちど、", romanji: "Mou ichido", english: "Once more"}, {hiragana: "おねがいします。", romanji: "Onegai shimasu", english: "please."}, {hiragana: "しつもんは？", romanji: "Shitsumon wa?", english: "Questions?"}, {hiragana: "だいじょうぶですか？", romanji: "Daijoubu desuka?", english: "Are you okay?"}, {hiragana: "だいじょうぶです。", romanji: "Daijoubu desu", english: "I am okay."}, {hiragana: "まだです。", romanji: "Mada desu", english: "Not yet."}, {hiragana: "いいですか？", romanji: "Ii desuka?", english: "Is it okay?"}, {hiragana: "いいです。", romanji: "Ii desu", english: "Itʼs good. Itʼs correct."}, {hiragana: "ちがいます。", romanji: "Chigaimasu", english: "Itʼs incorrect."}, {hiragana: "くりかえしてください。", romanji: "Kurikaeshite kudasai", english: "Please repeat."}, {hiragana: "はじめましょう。", romanji: "Hajimemashou", english: "Letʼs start."}, {hiragana: "おわりましょう。", romanji: "Owarimashou", english: "Letʼs end."}, {hiragana: "かいてください。", romanji: "Kaite kudasai", english: "Please write."}, {hiragana: "きいてください。", romanji: "Kiite kudasai", english: "Please listen."}, {hiragana: "よんでください。", romanji: "Yonde kudasai", english: "Please read."}, {hiragana: "みてください。", romanji: "Mite kudasai", english: "Please look."}, {hiragana: "えいごで なんですか？", romanji: "Eigo de nan desuka?", english: "How do you say in English?"}, {hiragana: "にほんごで なんですか？", romanji: "Nihongo de nan desuka?", english: "How do you say in Japanese?"}, {hiragana: "クラス", romanji: "kurasu", english: "class"}, {hiragana: "しゅくだい", romanji: "shukudai", english: "homework"}, {hiragana: "がくせい", romanji: "gakusei", english: "student"}, {hiragana: "せんせい", romanji: "sensei", english: "teacher"}, {hiragana: "たとえば…", romanji: "Tatoeba", english: "For example…"}, {hiragana: "またらいしゅう。", romanji: "Mata raishu", english: "See you next week"}, {hiragana: "すみません・・・", romanji: "Sumimasen", english: "Excuse me"}, {hiragana: "かいしゃいん", romanji: "kaishain", english: "office worker/employee"}]
  return (
    <>
        <FlashCardApp cards={sampleCards} />
    </>
  )
}

export default App
