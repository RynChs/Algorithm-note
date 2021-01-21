/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
    let dp = new Array(T + 1).fill(Number.MAX_SAFE_INTEGER - 1);
    dp[0] = 0;
    for (let i = 1; i <= T; i++) {
        for (const item of clips) {
            if (item[0] < i && i <= item[1]) {
                dp[i] = Math.min(dp[i], dp[item[0]] + 1);
            }
        }
    }
    return dp[T] === Number.MAX_SAFE_INTEGER - 1 ? -1 : dp[T];
};

console.log(videoStitching([[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], 10));