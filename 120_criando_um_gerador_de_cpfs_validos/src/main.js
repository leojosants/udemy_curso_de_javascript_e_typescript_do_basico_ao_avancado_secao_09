/*-------------------- imports --------------------*/
import GerateCPF from './modules/GenerateCPF';
import './assets/css/style.css';

(function () {
    const generate = new GerateCPF();
    const generateCpfButton = document.querySelector('.generateCpfButton');
    const cpfGenerated = document.querySelector('.cpfGenerated');

    cpfGenerated.innerHTML = generate.generateNewCPF();

    generateCpfButton.addEventListener('click', () => {
        location.reload();
    });
})()