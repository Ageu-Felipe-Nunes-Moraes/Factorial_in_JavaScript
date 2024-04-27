
class FactorialCalculate {
    constructor() {
        this.factorial = null;
        this.result = 1;
        this.readline = require('readline');
    }

    question(question) {
        const rl = this.readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise((resolve, reject) => {
            rl.question(question, (value) => {
                rl.close();
                resolve(Number(value)); // Converting for number
            });
        });
    }

    async getValue() {
        this.factorial = await this.question("Digite um valor para calcular o fatorial: ");

        if (this.factorial <= 0) {
            console.log("Entrada inválida. Por favor, insira um número positivo.");
            await this.getValue(); // Waiting a new input
        }
    }

    checksConditionals() {
        if (this.factorial < 0) {
            console.log("Valor negativo, portanto inválido.");
        } else {
            this.printResult();
        }
    }

    printResult() {
        this.result = 1;
        for (let i = 1; i <= this.factorial; i++) {
            this.result *= i;
        }
        console.log(`O resultado de ${this.factorial} em fatorial é: ${this.result}`);
    }
}

(async () => {
    let calculator = new FactorialCalculate();
    await calculator.getValue();
    calculator.checksConditionals();
})();
