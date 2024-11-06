/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let comp = "";
    let cnt = 1, n = word.length;
    let ch = word[0];
    for(let i = 1; i < n; i++){
        if(word[i]=== ch && cnt < 9){
            cnt++;
        }else{
            comp += cnt + ch;
            ch = word[i];
            cnt = 1;
        }
    }
    comp += cnt + ch;
    return comp;
    
};