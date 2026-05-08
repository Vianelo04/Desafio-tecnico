function correcao(string) {
    const dicionario = {'a': 4, 'e' :3 ,'i' :1 , 's': 5 };

    let resultado = string;
    for (const [letra, numero] of Object.entries(dicionario)){
        resultado = resultado.replaceAll(numero, letra);
    }
    
    return resultado;
}

console.log(correcao("T35t3 d3 35t4g1o"));