/*-------------------- imports --------------------*/
import ValidateCPF from "./validateCPF";

export default class GenerateCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatted(cpf) {
        return (`
            ${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}
        `);
    }

    generateNewCPF() {
        const cpfWithoutDigit = this.rand();
        const digit_1 = ValidateCPF.generateDigit(cpfWithoutDigit);
        const digit_2 = ValidateCPF.generateDigit(cpfWithoutDigit + digit_1);
        const newCPF = cpfWithoutDigit + digit_1 + digit_2;
        return this.formatted(newCPF);
    }
}