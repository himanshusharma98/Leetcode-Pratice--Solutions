/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const mapSToT = new Map();
    const mapTToS = new Map();
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        if (mapSToT.has(charS)) {
            if (mapSToT.get(charS) !== charT) {
                return false;
            }
        } else {
            mapSToT.set(charS, charT); 
        }
        if (mapTToS.has(charT)) {
            if (mapTToS.get(charT) !== charS) {
                return false;
            }
        } else {
            mapTToS.set(charT, charS);
        }
    }
    return true;
}


