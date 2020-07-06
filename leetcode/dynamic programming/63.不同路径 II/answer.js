/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;
    obstacleGrid[0][0] = 1;
    let hasObstacle = false;
    for (let i = 1; i < obstacleGrid[0].length; i++) {
        if (obstacleGrid[0][i] === 1) {
            hasObstacle = true;
        }
        obstacleGrid[0][i] = hasObstacle ? 0 : 1;
    }
    hasObstacle = false;
    for (let i = 1; i < obstacleGrid.length; i++) {
        if (obstacleGrid[i][0] === 1) {
            hasObstacle = true;
        }
        obstacleGrid[i][0] = hasObstacle ? 0 : 1;
    }
    for (let i = 1; i < obstacleGrid.length; i++) {
        for (let j = 1; j < obstacleGrid[0].length; j++) {
            if (obstacleGrid[i][j] === 1) {
                obstacleGrid[i][j] = 0;
            } else {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
            }
        }
    }
    return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};

console.log(uniquePathsWithObstacles(
    [
        [0,0,0],
        [0,1,0],
        [0,0,0]
    ]
));