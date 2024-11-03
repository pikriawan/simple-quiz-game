export default class LetterBox {
    constructor(level, id, letter) {
        this.level = level;
        this.id = id;
        this.letter = letter;
        this.originIndex = null;

        this.$ = document.createElement("span");
        this.$.textContent = this.letter.toUpperCase();
        this.$.classList.add("letter-box");

        this.onClick = this.onClick.bind(this);
        this.$.addEventListener("click", this.onClick);
    }

    setOriginIndex(index) {
        this.originIndex = index;
    }

    onClick(event) {
        if (this.level.answerBoard.findLetterBoxIndexById(this.id) === -1) {
            this.level.letterBoard.remove(this);
            this.level.answerBoard.add(this);
        } else {
            this.level.answerBoard.remove(this);
            this.level.letterBoard.add(this);
        }
    }
}
