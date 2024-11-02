import LetterBox from "./LetterBox.js";
import LetterContainer from "./LetterContainer.js";

export default class LetterBoard {
    constructor(level) {
        this.level = level;

        this.$ = document.createElement("div");
        this.$.classList.add("letter-board");

        this.letterContainers = [];

        const shuffledAnswer = this.shuffleLetters(this.level.answer.split(""));

        for (let i = 0; i < this.level.answer.length; i++) {
            const letterContainer = new LetterContainer(this.level);
            const letterBox = new LetterBox(this.level, i, shuffledAnswer[i]);
            letterBox.setOriginIndex(i);
            letterContainer.setLetterBox(letterBox);
            this.$.append(letterContainer.$);
            this.letterContainers.push(letterContainer);
        }
    }

    shuffleLetters(letters) {
        for (let i = letters.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i + 1);
            [letters[i], letters[j]] = [letters[j], letters[i]];
        }

        return letters;
    }

    findLetterBoxIndexById(id) {
        return this.letterContainers.findIndex((l) => l.getLetterBox()?.id === id);
    }

    findLetterBoxOriginIndex(letterBox) {
        return letterBox.originIndex;
    }

    add(letterBox) {
        const letterBoxOriginIndex = this.findLetterBoxOriginIndex(letterBox);
        this.letterContainers[letterBoxOriginIndex].setLetterBox(letterBox);

        this.onInput(letterBox);
    }

    onInput() {
    }

    remove(letterBox) {
        const letterBoxIndex = this.findLetterBoxIndexById(letterBox.id);

        if (letterBoxIndex !== -1) {
            this.letterContainers[letterBoxIndex].removeLetterBox();
        }

        this.onInput();
    }
}
