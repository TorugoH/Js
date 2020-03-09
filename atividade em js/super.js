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
class Passaro extends Animal{
    constructor(){
        super();/*oferece o  acesso aos parametro da class pai*/
        this.bico=null
    }
    voar(){
        console.log('voar')
        
    }
    dormir(){
        console.log('dormir')
    }
}
class Papagaio extends Passaro{
    constructor(fala) {
        super()
        this.falar=fala
    }
    fala(){
        console.log('falando')
    }
}
