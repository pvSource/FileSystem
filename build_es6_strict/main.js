"use strict";
class DataFile {
    constructor(name) {
        this.isFolder = false;
        this.name = name;
    }
    printComposition() {
    }
}
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
                this.composition[i].printComposition(level + 4);
            }
        }
    }
}
let a = new Folder("C");
let b = a.addFolder(new Folder("first_folder"));
a.addDataFile(new DataFile("first_file"));
b.addFolder(new Folder("second_folder"));
b.addDataFile(new DataFile("second_file"));
a.printComposition();
//# sourceMappingURL=main.js.map