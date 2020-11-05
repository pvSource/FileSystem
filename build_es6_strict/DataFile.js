"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataFile {
    constructor(name) {
        this.isFolder = false;
        this.name = name;
    }
    printComposition(level = 0) {
        console.log(`${' '.repeat(level)}${this.name}`);
    }
    clone() {
        let clone_data_file = new DataFile(this.name);
        return clone_data_file;
    }
}
exports.default = DataFile;
//# sourceMappingURL=DataFile.js.map