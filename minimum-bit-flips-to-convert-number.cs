public int MinBitFlips(int start, int goal){
    int xor = start ^ goal;
    int count = 0;
    while(xor != 0){
        if((xor & 1) == 1){
            count++;
        }
        xor = xor >> 1;
    }
    return count;
}