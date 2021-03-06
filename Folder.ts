import DataFile from './DataFile';

export default class Folder implements IFileSystemObject {
    public name: string;
    public composition: Array <IFileSystemObject> = [];
    readonly isFolder: boolean = true;

    constructor(name: string) {
        this.name = name;
    }

    addDataFile(new_file: DataFile): DataFile {
        this.composition.push(new_file);
        return new_file;
    }

    addFolder(new_folder: Folder): Folder {
        this.composition.push(new_folder);
        return new_folder;
    }

    getComposition(): Array <IFileSystemObject> {
        return this.composition;
    }

    printComposition(level: number = 0): void {
        console.log(`${' '.repeat(level)}${this.name}`)       
        for(let i: number = 0; i < this.composition.length; i++) {
            this.composition[i].printComposition(level + 4);
    }
}

    clone(): Folder {
        let clone_folder = new Folder(this.name);
        if (this.composition != []) {
            for(let i: number = 0; i < this.composition.length; i++){
                clone_folder.composition[i] = this.composition[i].clone(); // временная ошибка, добавить clone() и реализовать на всех экзэмплярах
            }
        }

        return clone_folder;
    }
}