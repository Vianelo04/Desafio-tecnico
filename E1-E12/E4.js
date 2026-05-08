function correcao(string) {
    return string.replace(/\d/g, "[removido]");
}

console.log(correcao("teste 1 de 2 string 3"));