"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Folder_1 = require("./Folder");
class FileSystem extends Folder_1.default {
    constructor(name) {
        super(name);
    }
    clone() {
        let clone_fs = new FileSystem(this.name);
        Object.assign(clone_fs.composition, this.composition);
        return clone_fs;
    }
}
//# sourceMappingURL=FileSystem.js.map