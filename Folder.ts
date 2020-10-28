class Folder {
    public name: string;
    public composition: Array <DataFile | Folder>;

    constructor(name: string) {
        this.name = name;
    }

    addDataFile(new_file): void {
        this.composition.push(new_file);
    }

    addFolder(new_folder): void {
        this.composition.push(new_folder);
    }

    getComposition(): Array <DataFile | Folder> {
        return this.composition;
    }
}