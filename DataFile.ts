class DataFile implements IFileSystemObject {
    public name: string;
    readonly isFolder: boolean = false;

    constructor(name: string) {
        this.name = name;
    }

    printComposition(): void {
        //это заглушка чтобы в FileSystem пока работало
    }

    clone(): DataFile {
        let clone_data_file = new DataFile(this.name);
        return clone_data_file;
    }
}

export default DataFile;