let array=Array('Cadeira','Impressora','Garfo');
let adicionar_btn=document.getElementById('adicionar');
let ordenar_btn=document.getElementById('ordenar');

function adicionar(){
    let campo=document.querySelector('#campo').value;
    if(campo==''){
        alert('informe um valor valido');
        
    }
    else{
        if(array.indexOf(campo)==-1){
            array.push(campo);
            console.log(array);
            document.querySelector('#campo').value=' ';
        }
        else if(array.indexOf(campo)!=-1){
            alert('valor ja existente')
        }
    }
}
function ordenarArray(){
    array.sort();
    console.log(array);
}
adicionar_btn.addEventListener('click',adicionar);
ordenar_btn.addEventListener('click',ordenarArray);