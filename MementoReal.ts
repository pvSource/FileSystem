import SnapshotMemento from './SnapshotMemento';
import Folder from './Folder';

class MementoReal implements SnapshotMemento {
    public readonly root_folder: Folder;

    constructor(root_folder: Folder) {
        this.root_folder = root_folder;
    }
}

export default MementoReal;