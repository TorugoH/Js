/*Declaração de varivel*/
let nome=prompt('Informe seu nome');
let altura=prompt('Informe sua altura em cm');
let peso=prompt('Informe seu peso');
let alturaReal=0;
let m=0;
/*converção dos dados*/
let alturaFloat=parseFloat(altura);
let pesoFloat=parseFloat(peso);
/*calculos*/
alturaReal=alturaFloat/100;
m=pesoFloat/(Math.pow(alturaReal,2));
/*Condicionais*/
if(m<16){
    document.write(nome+' possui indice de massa corporal igaual '+m+'sendo classificado como: Baixo peso muito grave');
}
else if(m>=16 && m<16.99){
    document.write(nome+' possui indice de massa corporal igaual '+m+' sendo classificado como: Baixo peso grave')
}
else if(m>=17 && m<=18.49){
    document.write(nome+' possui indice de massa corporal igaual '+m+' sendo classificado como: Baixo peso')   
}
else if(m>=18.50 && m<=24.99){
    document.write(nome+' possui indice de massa corporal igaual '+m+' sendo classificado como:Peso normal');
}
else if(m>=25 && m<=29.99){
    document.write(nome+' possui indice de massa corporal igaual '+m+' sendo classificado como:Sobrepeso');
}
else if(m>=30 && m<=34.99){
    document.write(nome+' possui indice de massa corporal igaual '+m+' sendo classificado como: Obesidade grau I');
}
else if(m>=35 && m<=39.99){
    document.write(nome+' possui indice de massa corporal igaual '+m+' sendo classificado como: Obesidade grau II');
}
else if(m>=40){
    document.write(nome+' possui indice de massa corporal igaual '+m+' sendo classificado como:Obseidade III')
}
