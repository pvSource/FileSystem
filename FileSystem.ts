import Folder from './Folder';
import MementoReal from './MementoReal';
import SnapshotMemento from './SnapshotMemento'

class FileSystem {
    public name: string;
    public root_folder: Folder = new Folder("root");

    constructor(name: string, root_folder?: Folder) {
        this.name = name;
        if (root_folder) {
            this.root_folder = root_folder;
        }
    }
    
    printComposition(): void {
        console.log("===== "+this.name+" =====");
        this.root_folder.printComposition();
    }

    createMemento(): SnapshotMemento {
        return new MementoReal(this.root_folder.clone());
    }

    restoreMemento(snapshot: SnapshotMemento) {
        this.root_folder = (snapshot as MementoReal).root_folder.clone();
    }

}

export default FileSystem;