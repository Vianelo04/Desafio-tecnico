const pessoa = {
    nome: "Dev",
    sobrenome: "smart",
    idade: "26",
    cargo: "analista de sistemas",
    documento: "123.345.678-90"
}

function deletar(campos) {

    delete campos.documento;

    return campos;

}

console.log(deletar(pessoa));