import AnswerBoard from "./AnswerBoard.js";
import Level from "./Level.js";
import LevelManager from "./LevelManager.js";
import LetterBoard from "./LetterBoard.js";

const levelManager = new LevelManager();

const levels = [
    {
        question: "Negara terkecil di Asia Tenggara",
        answer: "singapura"
    },
    {
        question: "Nama kota di Jawa Tengah",
        answer: "surakarta"
    },
    {
        question: "Negara terluas di dunia",
        answer: "rusia"
    },
    {
        question: "Negara terpadat di dunia",
        answer: "india"
    },
    {
        question: "Negara di Benua Amerika Utara",
        answer: "Kanada"
    }
];

for (let i = 0; i < levels.length; i++) {
    levelManager.add(new Level(
        levelManager,
        i.toString(),
        levels[i].question,
        levels[i].answer
    ));
}

levelManager.enterLevel(levelManager.levels[0].name);

document.body.append(levelManager.$);
