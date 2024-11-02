export default class LevelManager {
    constructor() {
        this.$ = document.createElement("div");
        this.$.classList.add("level-manager");

        this.levels = [];
        this.activeLevel = null;
    }

    findLevelIndexByName(name) {
        return this.levels.findIndex((l) => l.name === name);
    }

    add(level) {
        this.levels.push(level);
        this.$.append(level.$);
    }

    remove(level) {
        if (!this.levels.length) {
            return;
        }

        const levelIndex = this.findLevelIndexByName(level.name);

        if (levelIndex !== -1) {
            this.levels.splice(levelIndex, 1);
        }
    }

    clearLevelDisplayClasses() {
        if (!this.levels.length) {
            return;
        }

        this.levels.forEach((l) => l.$.classList.remove("display"));
    }

    enterLevel(name) {
        const levelIndex = this.findLevelIndexByName(name);

        if (levelIndex === -1) {
            return;
        }

        const level = this.levels[levelIndex];
        this.activeLevel = level;
        this.clearLevelDisplayClasses();
        level.reset();
        level.$.classList.add("display");
    }

    enterPreviousLevel() {
        if (!this.activeLevel) {
            return;
        }

        const levelIndex = this.findLevelIndexByName(this.activeLevel.name) - 1;

        if (!this.levels[levelIndex]) {
            return;
        }

        const level = this.levels[levelIndex];
        this.activeLevel = level;
        this.clearLevelDisplayClasses();
        level.reset();
        level.$.classList.add("display");

    }

    enterNextLevel() {
        if (!this.activeLevel) {
            return;
        }

        const levelIndex = this.findLevelIndexByName(this.activeLevel.name) + 1;

        if (!this.levels[levelIndex]) {
            return;
        }

        const level = this.levels[levelIndex];
        this.activeLevel = level;
        this.clearLevelDisplayClasses();
        level.reset();
        level.$.classList.add("display");
    }
}
