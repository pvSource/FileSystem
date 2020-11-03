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
        for (let i = 0; i < this.composition.length; i++) {
            console.log(`${' '.repeat(level)} ${this.composition[i].name}`);
            if (this.composition[i].isFolder) {
                let current_folder = this.composition[i];
                current_folder.printComposition(level + 4);
            }
        }
    }
}
exports.default = Folder;
//# sourceMappingURL=Folder.js.map