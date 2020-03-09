document.write('parte 1'+'<br>');
let lista=Array();
lista[0]='banan';
lista[1]='coco';
lista[2]='manga';
lista[3]='uva';
lista[4]='pera';

for(let i=0;i<lista.length;i++){
    document.write(lista[i]+'<br>');
}
document.write('<hr>')
document.write('parte 2'+'<br>');
let i=1,j=1
while(i<=10){
    j=1;
    while(j<=10){
        document.write(i+" x "+j,"="+(i*j)+'<br>');
        j++
    }
    document.write('<hr/>')
    i++
}