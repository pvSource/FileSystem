class DataFile implements IFileSystemObject {
    public name: string;
    readonly isFolder: boolean = false;

    constructor(name: string) {
        this.name = name;
    }

    printComposition(): void {
        //это заглушка чтобы в FileSystem пока работало
    }
}