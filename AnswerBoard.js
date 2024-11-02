import LetterContainer from "./LetterContainer.js";

export default class AnswerBoard {
    constructor(level) {
        this.level = level;

        this.$ = document.createElement("div");
        this.$.classList.add("answer-board");

        this.letterContainers = [];

        for (const letter of this.level.answer) {
            const letterContainer = new LetterContainer(this.level);
            this.$.append(letterContainer.$);
            this.letterContainers.push(letterContainer);
        }
    }

    findLetterBoxIndexById(id) {
        return this.letterContainers.findIndex((l) => l.getLetterBox()?.id === id);
    }

    findEmptyLetterContainerIndex() {
        return this.letterContainers.findIndex((l) => !l.getLetterBox());
    }

    add(letterBox) {
        const emptyLetterContainerIndex = this.findEmptyLetterContainerIndex();

        if (emptyLetterContainerIndex !== -1) {
            this.letterContainers[emptyLetterContainerIndex].setLetterBox(letterBox);
        }

        this.onInput();
    }

    onInput() {
        if (this.level.isWin()) {
            this.level.onWin();
        }
    }

    remove(letterBox) {
        const letterBoxIndex = this.findLetterBoxIndexById(letterBox.id);

        if (letterBoxIndex !== -1) {
            this.letterContainers[letterBoxIndex].removeLetterBox();
        }

        this.onInput();
    }
}
