/*-------------------- functions --------------------*/
const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const generateUpperCase = () => {
    return String.fromCharCode(rand(65, 91)); // https://pt.wikipedia.org/wiki/ASCII
}

const generateLowerCase = () => {
    return String.fromCharCode(rand(97, 123)); // https://pt.wikipedia.org/wiki/ASCII
}

const generateNumbers = () => {
    return String.fromCharCode(rand(48, 58)); // https://pt.wikipedia.org/wiki/ASCII
}

const symbols = '!@#$%¨&*()_-+={}[]^~?;:.,<>ºª°§';

const generateSymbol = () => {
    return symbols[rand(0, symbols.length)];
};

export default function generatePassword(quantity, upperCase, lowerCase, numbers, symbols) {
    const passwordArray = [];
    quantity = Number(quantity);

    for (let i = 0; i < quantity; i++) {
        upperCase && passwordArray.push(generateUpperCase());
        lowerCase && passwordArray.push(generateLowerCase());
        numbers && passwordArray.push(generateNumbers());
        symbols && passwordArray.push(generateSymbol());
    }

    return passwordArray.join('').slice(0, quantity);
};