/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
    let count = 0;
    const visited = new Array(N + 1).fill(false);
    const dfs = (pos) => {
        if (pos > N) count++;
        for (let i = 1; i <= N; i++) {
            if (!visited[i] && (pos % i == 0 || i % pos == 0)) {
                visited[i] = true;
                dfs(pos + 1);
                visited[i] = false;
            }
        }
    }
    dfs(1);
    return count;
};