interface IFileSystemObject {
    name: string;
    isFolder: boolean;
    clone(): IFileSystemObject;
}