class Animal{//essa e classr pai, onde armazena tudo que for comum nas calsse filhas
    constructor() {
        this.cor=''
        this.tamanha=null
    }
    dormir(){
        console.log('dormir')
    }
}
/*Para os class filhas herdarem elementos e funços basta colocar  o extends*/
class Cachorro extends Animal{
    constructor(){
        super();
        this.orelha='Grandes e caidas'
      }

    correr(){
        console.log('corre')
      }
    
    rosnar(){
        console.log('rosnar')
     }
}
class Passaro extends Animal{
    constructor(){
        super();/*oferece o  acesso aos parametro da class pai*/
        this.bico='curto'
    }
    voar(){
        console.log('voar')
        
    }
    dormir(){
        console.log('dormir')
    }
}
class Papagaio extends Passaro{
    constructor() {
        super()
        this.falar=true
    }
    fala(){
        console.log('falando')
    }
}
let cachorro =new Cachorro()
let passaro=new Passaro()
let papagaio=new Papagaio()
cachorro.dormir()
passaro.dormir()
papagaio.dormir()
papagaio.voar()