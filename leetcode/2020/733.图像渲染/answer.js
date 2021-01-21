/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let m = image.length;
    let n = image[0].length;
    let oldColor = image[sr][sc];
    if (oldColor === newColor) return image;
    let queue = [[sr, sc]];
    while(queue.length) {
        const [r, c] = queue.pop();
        image[r][c] = newColor;
        if (r > 0 && image[r - 1][c] === oldColor) queue.push([r - 1, c]);
        if (c > 0 && image[r][c - 1] === oldColor) queue.push([r, c - 1]);
        if (r + 1 < m && image[r + 1][c] === oldColor) queue.push([r + 1, c]);
        if (c + 1 < n && image[r][c + 1] === oldColor) queue.push([r, c + 1]);
    }
    return image;
};

console.log(floodFill([
    [1,1,1],
    [1,1,0],
    [1,0,1]
], 1, 1, 2));