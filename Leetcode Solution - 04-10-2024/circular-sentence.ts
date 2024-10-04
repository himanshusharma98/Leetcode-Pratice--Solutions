function isCircularSentence(sentence: string): boolean {
    var sArr = sentence.split(" ")

    if(sentence.charAt(0) != sentence.charAt(sentence.length-1))
    return false;
    for(var i = 0; i<sArr.length-1; i++){
        let len = sArr[i].length-1;
        if(sArr[i].charAt(len) != sArr[i+1].charAt(0))
        return false;
    }
    return true;
    
};