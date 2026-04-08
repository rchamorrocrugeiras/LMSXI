/*
Exercicio 1: variables e tipos
    ● Declara variables para gardar: o teu nome, idade, se estás matriculado en DAM ou
    ASIR (booleano).
    ● Mostra todo con console.log.
*/
const nome = "René";
let idade = 19;
let matriculado = true;

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Matriculado en DAM?", matriculado);

/*
Exercicio 2: condicións
    ● Pide unha nota co prompt.
    ● Converte a número (Number(...)).
    ● Mostra por consola se é suspenso, aprobado, notable ou sobresaínte
*/
let nota = prompt("Que sacaches en Programación?");
nota = Number(nota);

if (nota < 5) {
    console.log("Suspenso");
}   else if (nota < 7) {
    console.log("Aprobado");
}   else if (nota < 9) {
    console.log("Notable");
}   else {
    console.log("Sobresaínte");
}

/*
Exercicio 3: arrays
    ● Crea un array cos nomes de 3 módulos do ciclo.
    ● Recorre o array cun for e mostra cada módulo.
*/
const modulos = ["Programación", "LMSXI", "SI"];

for (let i = 0; i < modulos.length; i++) {
    console.log("Módulo:" + modulos[i]);
}

/*
Exercicio 4: obxecto
    ● Crea un obxecto alumno con: nome, idade, ciclo, array de módulos.
    ● Mostra por consola o nome, o ciclo e o primeiro módulo do array.
*/
let alumno = {
    nome: "René",
    idade: 19,
    ciclo: "DAM",
    modulos: ["Programación", "LMSXI", "SI"]
};

console.log(
    "Nome:" + alumno.nome, 
    "Ciclo:" + alumno.ciclo, 
    "Primeiro módulo:" + alumno.modulos[0]
);

/*
Exercicio 5: función
    ● Fai unha función mostrarAlumno(alumno) que reciba un obxecto con nome e
    idade e mostre unha mensaxe do tipo: O alumno X ten Y anos.
    ● Proba a función con dous obxectos distintos.
*/
let alumno1 = {
    nome: "René",
    idade: 19
};

let alumno2 = {
    nome: "Diego",
    idade: 33
};

function mostrarAlumno(alumno) {
    console.log("O alumno", alumno.nome, "ten", alumno.idade, "anos");
};

let resultado1 = mostrarAlumno(alumno1);
let resultado2 = mostrarAlumno(alumno2);