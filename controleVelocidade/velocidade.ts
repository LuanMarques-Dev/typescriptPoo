export class Velocidade {
    constructor(
        private _velocidadeAtual: number,
        private _velocidadePermita: number
    ) {} 

    public get vvelocidadeAtual(): number {
        return this._velocidadeAtual;
    }

    public set vvelocidadeAtual(vvelocidadeAtual: number) {
        this._velocidadeAtual = vvelocidadeAtual;
    }

    public get vvelocidadePermita(): number {
        return this._velocidadePermita;
    }

    public set vvelocidadePermita(vvelocidadePermita: number) {
        this._velocidadePermita = vvelocidadePermita;
    }

    turbo(): void {
        this._velocidadeAtual += Math.random() * 20;
        console.log(`Velocidade Atual: ${this._velocidadeAtual.toFixed(1)} km/h`);
        if (this._velocidadeAtual > this._velocidadePermita) {
            console.log('Levou uma multa! Velocidade excedida.');
        }
    }

    velocidadePermitida(): string {
        return (
            `Controle de Velocidade:\n` + 
            `\nVelocidade Permitida: ${this._velocidadePermita.toFixed(1)} km/h`
        );
    }
}
