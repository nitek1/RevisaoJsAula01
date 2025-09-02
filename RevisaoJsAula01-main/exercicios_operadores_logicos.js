/*
===========================================================
Exercícios Práticos - Operadores Lógicos
===========================================================
*/

// 1. Crie p = true e q = false. Exiba p && q.
const p = true;
const q = false;

console.log(p && q);

// 2. Exiba p || q.

console.log(p || q)

// 3. Exiba !p e !q.

console.log (!p);
console.log(!q);

// 4. Verifique se idade > 18 E temCarteira == true.
let idade = 18;
let temCarteira = true;

if(idade >= 18 && temCarteira){
  console.log("Pode passar")
}else{
  console.log("Preso");
}

// 5. Use || para definir um valor padrão se uma variável for undefined.
let SemValor;

if(typeof SemValor === 'undefined' || SemValor === undefined ){
  SemValor = "Valor"
}

console.log(SemValor);


// 6. Teste (5 > 3 && 10 < 20).

if(5 > 3 && 10 < 20){
  console.log("impossivel")
}else{
  console.log("um esta errado")
}


// 7. Teste (false || (true && true)).

if(false || (true && true)){
  console.log("true")
}

// 8. Crie um if que só roda se usuario == "admin" E senha == "1234".
const usuario = "admin"
const senha = "1234"


if(usuario == "admin" && senha == "1234"){
  console.log("logado");
}

// 9. Crie uma expressão com !(nota >= 7).
let nota = 8;

if(!(nota >= 7)){
  console.log("roubado")
}

// 10. Peça para o aluno prever o resultado de:
let x = false, y = true, z = false;
console.log(x || y && !z); //true
