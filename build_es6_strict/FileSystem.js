"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Folder_1 = require("./Folder");
const MementoReal_1 = require("./MementoReal");
class FileSystem {
    constructor(name, root_folder) {
        this.root_folder = new Folder_1.default("root");
        this.name = name;
        if (root_folder) {
            this.root_folder = root_folder;
        }
    }
    printComposition() {
        console.log("===== " + this.name + " =====");
        this.root_folder.printComposition();
    }
    createMemento() {
        return new MementoReal_1.default(this.root_folder.clone());
    }
    restoreMemento(snapshot) {
        this.root_folder = snapshot.root_folder;
    }
}
exports.default = FileSystem;
//# sourceMappingURL=FileSystem.js.map