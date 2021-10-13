const calculadora = ( () => {

  const historico = new Map();
  let entrada = [];

  const enter = v => { entrada =[...entrada,v]} 

  const equals = function() {    
    switch(entrada[1]) {
      case '+':        
        somar(entrada);        
        break;

      case '-':
        subtrair(entrada);
        break;

      case '/':
        dividir(entrada);
        break;

      case '*':
        multiplicar(entrada);
        break;

      default:
        console.log("operador inválido")
        break;
    }
  }

  const somar = (entrada) => {
    let resultado = entrada[0] + entrada[2];
    alimentaHistorico(entrada, resultado)
  }

  const subtrair = (entrada) => {  
    let resultado  = entrada[0] - entrada[2];  
    alimentaHistorico(entrada, resultado)
  } 

  const dividir = (entrada) => {
    let resultado;
    if( !entrada[2] ) { 
      resultado = `não é possível dividir ${entrada[0]} por 0`;
      return alimentaHistorico(entrada, resultado);    
    }
    resultado  = entrada[0] / entrada[2]; 
    return alimentaHistorico(entrada, resultado);
  } 

  const multiplicar = (entrada) => {  
    let resultado  = entrada[0] * entrada[2];  
    alimentaHistorico(entrada, resultado);
  }  

  const alimentaHistorico = (entrada, valor) =>{
    let chaves = [...entrada, ' = ',  valor];   
    chaves = chaves.join('') ;
    historico.set(chaves, valor); 
    console.log(historico);
    limpaEntrada(entrada);
  }

  const limpaEntrada = array => array.length = 0;

  const list = () => {
    console.log("Histórico das Operações")
    historico.size !== 0 ? console.log(historico) : console.log("Não possui registro para mostrar")
  }

  const reset = () => {
    historico.clear();
    if(!historico.size)
      console.log("Registro limpo com sucesso!");
  }

  return{
    enter,
    equals,
    list,
    reset,
  }

})();