export default class LetterContainer {
    constructor(level) {
        this.level = level;
        this.letterBox = null;

        this.$ = document.createElement("div");
        this.$.classList.add("letter-container");
    }

    getLetterBox() {
        return this.letterBox;
    }

    setLetterBox(letterBox) {
        if (this.$.children.length !== 0) {
            return;
        }

        this.letterBox = letterBox;
        this.$.append(this.letterBox.$);
    }

    removeLetterBox() {
        if (!this.letterBox) {
            return;
        }

        this.$.removeChild(this.letterBox.$);
        this.letterBox = null;
    }
}
