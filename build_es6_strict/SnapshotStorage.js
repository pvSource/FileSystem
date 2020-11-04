"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SnapshotStorage {
    constructor() {
        this.snapshots = [];
    }
    addSnapshot(new_snap) {
        this.snapshots.push(new_snap);
    }
    deleteSnapshotByIndex(index) {
        this.snapshots.splice(index, 1);
    }
    getLastSnapshot() {
        return this.snapshots[this.snapshots.length - 1];
    }
    getSnapshotByIndex(index) {
        return this.snapshots[index];
    }
    getSnapshotStorageLength() {
        return this.snapshots.length;
    }
}
var snaphot_storage = new SnapshotStorage();
exports.default = snaphot_storage;
//# sourceMappingURL=SnapshotStorage.js.map