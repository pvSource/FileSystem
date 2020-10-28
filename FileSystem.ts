class FileSystem {
    public main_folder: Folder;

    constructor(main_folder: Folder) {
        this.main_folder = main_folder;
    }
    
    printAll(): void {
        for(let i: number = 0; i < this.main_folder.composition.length; i++){//}
    }
}