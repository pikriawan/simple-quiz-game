import AnswerBoard from "./AnswerBoard.js";
import LetterBoard from "./LetterBoard.js";

export default class Level {
    constructor(levelManager, name, question, answer) {
        this.levelManager = levelManager;
        this.name = name;
        this.question = question;
        this.answer = answer;

        this.$ = document.createElement("div");
        this.$.classList.add("level");

        this.$question = document.createElement("p");
        this.$question.textContent = this.question;
        this.$question.classList.add("question");
        this.$.append(this.$question);

        this.initBoards();
    }

    initBoards() {
        this.answerBoard = new AnswerBoard(this);
        this.$.append(this.answerBoard.$);

        this.letterBoard = new LetterBoard(this);
        this.$.append(this.letterBoard.$);
    }

    isWin() {
        let answer = "";

        for (const l of this.answerBoard.letterContainers) {
            if (l.getLetterBox()) {
                answer += l.getLetterBox().letter;
            }
        }

        return answer === this.answer;
    }

    onWin() {
        alert("Benar!");
        this.levelManager.enterNextLevel();
    }

    reset() {
        this.$.removeChild(this.answerBoard.$);
        this.$.removeChild(this.letterBoard.$);

        this.initBoards();
    }
}
