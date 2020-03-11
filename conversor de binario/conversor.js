function conversorBinario(){
    let entradaBinairo=document.getElementById('entradoDobinario').value 
    if(entradaBinairo==''){
        window.alert('Isto nao e um binario')
    }else{
        let convertido=parseInt(entradaBinairo,2)
        document.getElementById('saidaDobinario').value=convertido
        
    }
}
let btnCoversor=document.getElementById('conversor')
btnCoversor.addEventListener('click',conversorBinario)