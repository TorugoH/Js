let idade=prompt('Digite sua idade');
let Crianca="Criança";
let Jovem="Jovem";
let adulto="adulto";
let Idoso="Idoso";
if(idade>=0 && idade<15){
    document.write(Crianca);
}
else if(idade>=15 && idade<30){
    document.write(Jovem);
}
else if(idade>=30 && idade<60){
    document.write(adulto);
}
else if(idade>=60){
    document.write(Idoso);
}