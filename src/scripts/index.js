class Calculadora {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.limpar();
  }

  limpar() {
    this.numeroAtual = "0";
    this.numeroAnterior = "";
    this.operacao = null;
    this.atualizarDisplay();
  }

  deletar() {
    if (this.numeroAtual.length === 1) {
      this.numeroAtual = "0";
    } else {
      this.numeroAtual = this.numeroAtual.toString().slice(0, -1);
    }
    this.atualizarDisplay();
  }

  appendNumero(numero) {
    if (this.numeroAtual.includes(".") && numero === ".") {
      return;
    }
    if (this.numeroAtual === "0" && this.numeroAtual !== ".") {
      this.numeroAtual = numero;
    } else {
      this.numeroAtual += numero;
    }
    this.atualizarDisplay();
  }

  escolherOperacao(operacao) {
    if (this.numeroAtual === "" && this.numeroAnterior === "") {
      return;
    }

    if (this.numeroAnterior !== "") {
      this.calcular();
    }

    this.operacao = operacao;
    this.numeroAnterior = this.numeroAtual;
    this.numeroAtual = "";
  }

  calcular() {
    let calculo;
    const anterior = parseFloat(this.numeroAnterior);
    const atual = parseFloat(this.numeroAtual);

    if (isNaN(anterior) || isNaN(atual) || !this.operacao) return;

    switch (this.operacao) {
      case "+":
        calculo = anterior + atual;
        break;
      case "-":
        calculo = anterior - atual;
        break;
      case "*":
        calculo = anterior * atual;
        break;
      case "/":
        calculo = anterior / atual;
        if (!Number.isInteger(calculo)) {
          calculo = (anterior / atual).toFixed(4);
        }
        break;
      default:
        return;
    }

    this.numeroAtual = calculo.toString();
    this.operacao = null;
    this.numeroAnterior = "";
    this.atualizarDisplay();
  }

  setPorcentagem() {
    if (this.numeroAtual === "") return;

    this.numeroAtual = (parseFloat(this.numeroAtual) / 100).toString();
    this.atualizarDisplay();
  }

  mudarSinal() {
    if (this.numeroAtual == "" || this.numeroAtual === "0") return;
    this.numeroAtual = (parseFloat(this.numeroAtual) * -1).toString();
    this.atualizarDisplay();
  }

  atualizarDisplay() {
    this.displayElement.innerText = this.numeroAtual.replace(".", ",");
  }
}

const resultado = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");

const calculadora = new Calculadora(resultado);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    const value = button.value;

    switch (action) {
      case "number":
        calculadora.appendNumero(value);
        break;
      case "decimal":
        calculadora.appendNumero(value);
        break;
      case "operator":
        calculadora.escolherOperacao(value);
        break;
      case "calculate":
        calculadora.calcular();
        break;
      case "clear":
        calculadora.limpar();
        break;
      case "delete":
        calculadora.deletar();
        break;
      case "percent":
        calculadora.setPorcentagem();
        break;
      case "change-sign":
        calculadora.mudarSinal();
        break;
      default:
        return;
    }
  });
});
