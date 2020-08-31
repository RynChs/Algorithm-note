/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    if (rooms[0].length === 0) return false;
    let isVisit = new Array(rooms.length).fill(false);
    let num = 0;
    const dfs = (x) => {
        isVisit[x] = true;
        num++;
        for (const item of rooms[x]) {
            !isVisit[item] && dfs(item);
        }
    }
    dfs(0);
    return num === rooms.length;
};

console.log(canVisitAllRooms([[1],[2],[3],[]]));
console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));