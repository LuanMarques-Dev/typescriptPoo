import { Velocidade } from "./velocidade";
import prompt from "prompt-sync";

let control: Velocidade = new Velocidade(0, 10);
let teclado = prompt();
let option: number = 0;

while(option !== 3) {
    console.log('============Menu============');
    console.log('1. Velocidade Permitida     ');
    console.log('2. Turbo                    ');
    console.log('3. Sair                     ');

    option = +teclado('Escolha uma opção: ');

    switch(option) {
        case 1:
            let velocidadePermitida: number = +teclado('Digite a velocidade permitida: ');
            control.vvelocidadePermita = velocidadePermitida;
            console.log(`Velocidade permitida é: ${control.vvelocidadePermita}`);
            break;
        case 2:
            control.turbo();
            break;
        case 3:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}
