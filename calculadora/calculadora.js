/*comando eval,resolve expressões matematicas*/
let numero=document.querySelectorAll('.numero');
let operacao=document.querySelector('.operacao');
function descobrindo(operacao,numero){
  if(operacao=='acao'){
        if(numero=='C'){
            document.querySelector('#resultado').value='';
        }
        if(numero==='+'|| numero==='-'|| numero==='*'|| numero==='/'|| numero=='.' ){
            document.querySelector('#resultado').value+=numero;        
        }
        if(numero==='='){
            let resolvida=eval(document.querySelector('#resultado').value);
            document.querySelector('#resultado').value='';
            document.querySelector('#resultado').value+=resolvida
        }
  }else if(operacao=='valor'){
    document.querySelector('#resultado').value+=numero;
       
  }
}


