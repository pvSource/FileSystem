import Folder from './Folder';

let a: Folder = new Folder("C");
let b = a.addFolder(new Folder("first_folder"));
a.addDataFile(new DataFile("first_file"));

    b.addFolder(new Folder("second_folder"));   
    b.addDataFile(new DataFile("second_file"));

a.printComposition();