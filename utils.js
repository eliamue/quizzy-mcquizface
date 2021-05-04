export function isYes(userInput) {
    const firstLetter = userInput[0].toLowerCase();

    return firstLetter === 'y' ? true : false;
}
export function isNo(userInput) {
    const firstLetter = userInput[0].toLowerCase();

    return firstLetter === 'n' ? true : false;
}