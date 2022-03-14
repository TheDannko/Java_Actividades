function mediaAritmetica(){

    var numero1=Number (prompt("Introduzca el primer dato"));
    var numero2=Number(prompt("Introduzca el segundo dato"));

    media = (numero1 + numero2) / 2;

    document.getElementById ("resultado") .innerHTML="La media es:"+media;

}