function minAddToMakeValid(s: string): number {
    let opening = 0;
    let unmatachedClosing = 0;

    for(const c of s){
        if(c === '('){
            opening++;
        }else if(c === ')'){
            if(opening <= 0){
                unmatachedClosing++;
            }else{
                opening--;
            }
        }
    }
    return opening + unmatachedClosing;
    
};