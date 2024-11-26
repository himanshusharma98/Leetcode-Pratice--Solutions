var reverseWords = function(s) {
    s = s.trim();
    let words = s.split(/\s+/);
    words.reverse();
    return words.join(" ");
    
};
