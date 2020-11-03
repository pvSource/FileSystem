"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Folder_1 = require("./Folder");
let a = new Folder_1.default("C");
let b = a.addFolder(new Folder_1.default("first_folder"));
a.addDataFile(new DataFile("first_file"));
b.addFolder(new Folder_1.default("second_folder"));
b.addDataFile(new DataFile("second_file"));
a.printComposition();
//# sourceMappingURL=main.js.map