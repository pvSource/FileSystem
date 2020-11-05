"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Folder {
    constructor(name) {
        this.composition = [];
        this.isFolder = true;
        this.name = name;
    }
    addDataFile(new_file) {
        this.composition.push(new_file);
        return new_file;
    }
    addFolder(new_folder) {
        this.composition.push(new_folder);
        return new_folder;
    }
    getComposition() {
        return this.composition;
    }
    printComposition(level = 0) {
        console.log(`${' '.repeat(level)}${this.name}`);
        for (let i = 0; i < this.composition.length; i++) {
            this.composition[i].printComposition(level + 4);
        }
    }
    clone() {
        let clone_folder = new Folder(this.name);
        if (this.composition != []) {
            for (let i = 0; i < this.composition.length; i++) {
                clone_folder.composition[i] = this.composition[i].clone();
            }
        }
        return clone_folder;
    }
}
exports.default = Folder;
//# sourceMappingURL=Folder.js.map