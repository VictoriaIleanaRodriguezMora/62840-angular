function getRandomNum(num: number): number {
    // console.log(Math.floor(Math.random() * num));
    return Math.floor(Math.random() * num);
}

export function randomString(chQuantity: number): string {
    const characters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789abcefghijklmnñopqrstuvwxyz*/-+%$&/#";
    const lengthCh = characters.length - 1;
    let stringFormed = [];
    for (let i = 0; i < chQuantity; i++) {
        stringFormed.push(characters[getRandomNum(lengthCh)]);
    }
    return stringFormed.join("");
}
