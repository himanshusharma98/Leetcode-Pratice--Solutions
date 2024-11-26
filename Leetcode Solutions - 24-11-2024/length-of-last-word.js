var lengthOfLastWord = function(s) {
    let length = 0;
    let counting = false;

    for (let c of s) {
        if (c !== ' ') {
            if (!counting) {
                counting = true;
                length = 1;
            } else {
                length++;
            }
        } else {
            counting = false;
        }
    }

    return length;    
};
