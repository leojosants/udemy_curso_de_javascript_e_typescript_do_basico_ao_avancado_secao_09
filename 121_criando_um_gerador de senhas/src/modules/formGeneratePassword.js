/*-------------------- imports --------------------*/
import generatePassword from './generators';

/*-------------------- html elements --------------------*/
const generatedPassword = document.querySelector('.generatedPassword');
const totalCharacters = document.querySelector('.totalCharacters');
const chkUpperCase = document.querySelector('.chkUpperCase');
const chkLowercase = document.querySelector('.chkLowercase');
const chkNumbers = document.querySelector('.chkNumbers');
const chkSymbols = document.querySelector('.chkSymbols');
const generatePasswordButton = document.querySelector('.generatePasswordButton');

/*-------------------- functions --------------------*/
function generate() {
    const password = generatePassword(
        totalCharacters.value,
        chkUpperCase.checked,
        chkLowercase.checked,
        chkNumbers.checked,
        chkSymbols.checked,
    );
    return password||'Nada selecionado';
}

export default () => { 
    generatePasswordButton.addEventListener('click', () => {
        generatedPassword.innerHTML = generate();
    });
}