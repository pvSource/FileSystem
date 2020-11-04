"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataFile {
    constructor(name) {
        this.isFolder = false;
        this.name = name;
    }
    printComposition() {
    }
    clone() {
        let clone_data_file = new DataFile(this.name);
        return clone_data_file;
    }
}
exports.default = DataFile;
//# sourceMappingURL=DataFile.js.map