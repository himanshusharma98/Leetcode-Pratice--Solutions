function dividePlayers(skill: number[]): number {
    let len = skill.length;
    skill.sort((a, b) => a - b);
    let j: number = len - 1;
    let sum = skill[0] + skill[j];
    let res = 0;
    for (let i = 0; i < len / 2; i++) {
        if (skill[i] + skill[j] == sum) {
            res += skill[i] * skill[j];
            j -= 1;
        } else {
            return -1;
        }
    }
    return res;
};