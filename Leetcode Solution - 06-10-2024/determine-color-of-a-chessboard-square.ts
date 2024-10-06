function squareIsWhite(coordinates: string): boolean {
    let letter = coordinates.slice(0, 1);
    let number = coordinates.slice(1, 2);

    const code = (letter.charCodeAt(0) - 96)

    return (code + +number) % 2 !== 0;
};