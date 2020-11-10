/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.snapArr = new Array(length).fill(0).map(() => new Map());
    this.snapId = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.snapArr[index].set(this.snapId, val);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snapId++;
    return this.snapId - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    const snapIds = [ ...this.snapArr[index].keys() ];
    let left = 0, right = snapIds.length - 1;
    // 二分查找
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (snapIds[mid] < snap_id) {
            left = mid + 1;
        } else if (snapIds[mid] > snap_id) {
            right = mid - 1;
        } else if (snapIds[mid] === snap_id) {
            return this.snapArr[index].get(snap_id);
        }
    }
    return this.snapArr[index].get(snapIds[left - 1]) || null;
};

var obj = new SnapshotArray(2);
obj.snap();
obj.set(1, 0);
obj.get(0, 0);
obj.set(1, 8);
obj.get(1, 0);
obj.set(0, 20);
obj.get(0, 0);
obj.set(0, 7);
console.log(obj.snapArr);