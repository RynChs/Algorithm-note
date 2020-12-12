/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const n = senate.length;
    const Radiant = [], Dire = [];
    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            Radiant.push(i);
        } else {
            Dire.push(i);
        }
    }

    while (Radiant.length > 0 && Dire.length > 0) {
        if (Radiant[0] < Dire[0]) {
            Radiant.push(Radiant[0] + n);
        } else {
            Dire.push(Dire[0] + n);
        }
        Radiant.shift();
        Dire.shift();
    }
    return Radiant.length ? 'Radiant' : 'Dire';
};