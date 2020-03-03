function soma(n1,n2){
    return n1 + n2;
}
var validar=0;

function validadeIdade (idade){
    var validar;
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade= prompt("Qual sua idade")
validadeIdade(idade)
console.log(validadeIdade(idade))

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*var d= new Date();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());
*/

/*
var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/

/*
var count= 0;
while (count <=5){
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);


/*var fruta={nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var lista =["maçã", "Pêra", "Laranja"];
lista.push("uva");
lista.pop();

console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(" - "));
var nome="Samuel Alves";
var n1 = 18;
var n2 = 10
var frase= "Japão é o melhor time do mundo";
alert(nome + " tem" + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(n1 + n2);
console.log(frase.replace("japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
*/