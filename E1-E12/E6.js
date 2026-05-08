async function viacep(cep, numero) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log(`${dados.logradouro}, ${numero}, ${dados.localidade}/${dados.uf} `);
}

viacep("36045290", "245");
