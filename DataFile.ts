class DataFile implements IFileSystemObject {
    public name: string;
    readonly isFolder: boolean = false;

    constructor(name: string) {
        this.name = name;
    }

    printComposition(level: number = 0): void {
        console.log(`${' '.repeat(level)}${this.name}`);
    }

    clone(): DataFile {
        let clone_data_file = new DataFile(this.name);
        return clone_data_file;
    }
}

export default DataFile;