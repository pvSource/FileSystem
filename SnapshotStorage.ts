import { runInThisContext } from "vm";
import SnapshotMemento from './SnapshotMemento';
import MementoReal from './MementoReal'


class SnapshotStorage {
    public snapshots: Array<MementoReal>;

    constructor() {
        this.snapshots = [];        
    }

    addSnapshot(new_snap: MementoReal): void {
        this.snapshots.push(new_snap);
    }

    deleteSnapshotByIndex(index: number) {
        this.snapshots.splice(index, 1);
    }

    getLastSnapshot(): MementoReal {
        return this.snapshots[this.snapshots.length - 1];
    }

    getSnapshotByIndex(index: number): MementoReal {
        return this.snapshots[index];
    }

    getSnapshotStorageLength(): number {
        return this.snapshots.length;
    }
}

var snaphot_storage = new SnapshotStorage();
export default snaphot_storage;