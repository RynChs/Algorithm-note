/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let map = {};
    for (const ticket of tickets) {
        const [from, to] = ticket;
        if (!map[from]) {
            map[from] = [];
        }
        map[from].push(to);
        map[from].sort();
    }

    let res = [];
    const dfs = (city) => {
        const citys = map[city];
        while (citys && citys.length) {
            const curCity = citys.shift();
            dfs(curCity);
        }
        res.unshift(city);
    }
    dfs('JFK');
    return res;
};


console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]));
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));