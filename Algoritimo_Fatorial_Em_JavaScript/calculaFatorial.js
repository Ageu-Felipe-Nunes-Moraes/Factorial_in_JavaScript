
class CalculaFatorial {
    constructor() {
        this.fatorial = null;
        this.resultado = 1;
        this.readline = require('readline');
    }

    pergunta(pergunta) {
        const rl = this.readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise((resolve, reject) => {
            rl.question(pergunta, (valor) => {
                rl.close();
                resolve(Number(valor)); // Convertendo para número
            });
        });
    }

    async getValor() {
        this.fatorial = await this.pergunta("Digite um valor para calcular o fatorial: ");

        if (this.fatorial <= 0) {
            console.log("Entrada inválida. Por favor, insira um número positivo.");
            await this.getValor(); // Esperando a nova entrada
        }
    }

    verificaCondicoes() {
        if (this.fatorial < 0) {
            console.log("Valor negativo, portanto inválido.");
        } else {
            this.imprimeResultado();
        }
    }

    imprimeResultado() {
        this.resultado = 1;
        for (let i = 1; i <= this.fatorial; i++) {
            this.resultado *= i;
        }
        console.log(`O resultado de ${this.fatorial} em fatorial é: ${this.resultado}`);
    }
}

(async () => {
    let calculadora = new CalculaFatorial();
    await calculadora.getValor();
    calculadora.verificaCondicoes();
})();
