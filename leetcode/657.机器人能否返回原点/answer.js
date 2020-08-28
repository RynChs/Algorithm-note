/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let L = 0, R = 0, U = 0, D = 0;
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'L':
                L++;
                break;
            case 'R':
                R++;
                break;
            case 'U':
                U++;
                break;
            case 'D':
                D++;
                break;
            default:
                break;
        }
    }
    return L === R && U === D;
};