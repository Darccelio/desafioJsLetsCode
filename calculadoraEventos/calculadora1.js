let calculadora = ( function () {

  window.addEventListener('load', (event)=>{
    const visor = document.querySelector('#visor');
    visor.value = 'Pronto, vamos calcular?';

    event.preventDefault();
  })

  let historico = [];
  let entrada = [];

  const form = document.querySelector('form');
  const btnEqual = document.querySelector("button[type='submit']");
  const getEnter = document.querySelector('#enter');
  const getNum = document.querySelector('#num');  
  const btnReset = document.querySelector('#reset');

  getEnter.onclick = () => {
    console.log(getNum.value);
    if (+getNum.value) {
      entrada = [...entrada, +getNum.value]
      getNum.value = '';
    } else
      alert(getNum.value + 'não é um numero');
  }

  const equals = function () {
    const operator = document.querySelector('input[type="radio"]:checked');
    let resultado;
    
    switch (operator.value) {
      case '+':
        resultado = somar(entrada);        
        break;

      case '-':
        resultado = subtrair(entrada);
        break;

      case '/':
        resultado = dividir(entrada);
        break;

      case '*':
        resultado = multiplicar(entrada);
        break;
    }

    alimentaHistorico(entrada, operator.value, resultado);
    operator.checked = false;
    limpaEntrada(entrada);

  }

  const somar = (entrada) => entrada[0] + entrada[1];
  const subtrair = (entrada) => entrada[0] - entrada[1];
  const dividir = (entrada) => {
    if (!entrada[1]) {
      return `não é possível dividir ${entrada[0]} por 0`;
    }
    return entrada[0] / entrada[1];
  }

  const multiplicar = (entrada) => entrada[0] * entrada[1];

  const alimentaHistorico = (entrada, operador, valor) => {
    let chaves = [entrada[0], operador, entrada[1], ' = ', valor].join('');
    historico = [...historico, chaves];
    visor.value = historico.reverse().toString().replace(/,/g , ' \n');        
  }
  
  const limpaEntrada = array => array.length = 0;
  
  btnReset.onclick = () => {
    visor.value = 'Pronto, vamos calcular?';
    historico.clear();

    if (!historico.size)
      console.log("Registro limpo com sucesso!");
  }

  btnEqual.addEventListener('click', equals);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  })

  return {
    enter,
    equals,
    list,
    reset
  }

})();