import Folder from './Folder';
import DataFile from './DataFile';
import FileSystem from './FileSystem';
import snaphot_storage from './SnapshotStorage';

let fs = new FileSystem("C");

let pictures = fs.root_folder.addFolder(new Folder("pictures"));
    let photo = pictures.addFolder(new Folder("Photo"));
        let november = photo.addFolder(new Folder("november"));
            let first_jpeg = november.addDataFile(new DataFile("1.jpeg"));
            let second_jpeg = november.addDataFile(new DataFile("2.jpeg"));
        let december = photo.addFolder(new Folder("december"));
            let new_year_jpeg = december.addDataFile(new DataFile("new_year.jpeg"));
    let GIF = pictures.addFolder(new Folder("GIF"));
let movies = fs.root_folder.addFolder(new Folder("movies"));
    let film_avi = movies.addDataFile(new DataFile("film.avi"));
let system = fs.root_folder.addFolder(new Folder("system"));
    let program_exe = system.addDataFile(new DataFile("system.exe"));
    
let root_file_init = fs.root_folder.addDataFile(new DataFile("root_file.init"));

fs.printComposition();

//
console.log("\n==========================\n");
//

snaphot_storage.addSnapshot(fs.createMemento()); //создаем и сохраняем снап


fs = new FileSystem("D");
    let readme_file = fs.root_folder.addDataFile(new DataFile("read.me"));
fs.printComposition();
console.log("fs после перезаписи\n================\n");



fs.restoreMemento(snaphot_storage.getLastSnapshot());
fs.printComposition();
console.log("fs после восстановления из снапа");