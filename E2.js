function aplicarFuncao(funcao, a, b) {
    const resultado = funcao(a, b);
    console.log(resultado);
}

function comprimentoString(a, b) {
    return a.length >= b.length ? a : b;
}

function juntar(a, b) {
    return a + " " + b;
}

aplicarFuncao(comprimentoString, "aaa", "bbbb");
aplicarFuncao(juntar, "Bem", "vindo");
