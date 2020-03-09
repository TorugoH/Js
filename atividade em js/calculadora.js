let numero1=prompt('informe o primeiro valor');
let numero2=prompt('informe o segundo valor');
let operacao=prompt('informe a operção desejada');
operacao.toLowerCase();
function calcuarOperacao(numero1,numero2,operacao){
    if(operacao=='soma'){
        let resultado=parseInt(numero1)+parseInt(numero2);
        return resultado;
    }
    else if(operacao=='subtração'){
         resultado=parseInt(numero1)-parseInt(numero2);
        return resultado;
    }
}

document.write("O resultado e: "+calcuarOperacao(numero1,numero2,operacao));