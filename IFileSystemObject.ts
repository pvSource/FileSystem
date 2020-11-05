interface IFileSystemObject {
    name: string;
    isFolder: boolean;
    clone(): IFileSystemObject;
    printComposition(level: number): void;
}