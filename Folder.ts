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
        for(let i: number = 0; i < this.composition.length; i++) {
            console.log(`${' '.repeat(level)} ${this.composition[i].name}`);
            if (this.composition[i].isFolder) {
                let current_folder: Folder = this.composition[i] as Folder;
                current_folder.printComposition(level+4);
            }
        }
    }
}