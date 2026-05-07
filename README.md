# Desafio técnico Back-end:
Resolução dos exercícios de 1 a 12 em JavaScript.


## Como executar: 
Cada exercício esta em um arquivo separado com nome de E*.js (* = ao número do exercício). 
Para executar, basta rodar no terminal "node e*.js".


### E1.js:
Criada uma função onde lê duas Strings, olha qual o comprimento de cada uma (número de caracteres) e retorna a maior, caso tenham o mesmo tamanho retorna a primeira.

Três inputs para testar cada uma das possibilidades (a > b, b > a, a = b).


### E2.js:
Criada uma função com três parâmetros, sendo eles: uma função e duas Strings.

Criada duas outras funções para retorna a função anterior nas duas Strings (foram criadas duas para realização de testes, uma onde junta as duas Strings e uma onde vê qual tem o maior comprimento).

Dois inputs para testar, um para cada função criada (juntar Strings e ver qual tem o maior comprimento).


### E3.js:
Criada uma função para retornar varias Strings juntas.

Utilização de "..." antes do parâmetro para que não haja limite de Strings.

Utilização do método .join para juntar as Strings.

Quatro inputs para testar, imprimindo: 1, 2, 3, 8 Strings em cada uma input respectivamente.


### E4.js:
Criada uma função utilizando o método .replace para mudar números de uma frase por "[removido]".

Utilizado "/\d/g" no .replace: o "\d" pega qualquer digito de 0 a 9 e "g" para que não mude apenas o primeiro digito que aparece.

Um input para testar na frase "teste 1 de 2 string 3".


### E5.js:
Criação de uma função para substituir os números de uma frase utilizando do dicionário estipulado.

Utilização do "Object.entries" para transformar o dicionário em Array e o "for" para percorrer o Array, repetindo a iteração com os pares.

Input para testar a substituição dos números pelas letras do dicionário.


### E6.js:
Criação de uma função que usa o serviço de API REST de CEP(ViaCEP).

Utilização do `fetch` e `async/await` para requisição HTTPS, `json()` para resposta.

Input para testar com meu CEP e número da minha casa.


### E7.js:
Imprime uma mensagem de saudações junto dos nomes (com a primeira letra maiúscula) e sobrenomes de cada objeto dados pelo Array.

Utilização de `for...of` para iterar.

Utilização dos métodos `.toUpperCase()` + `.slice(1)` para deixar a primeira letra do nome maiúscula.


### E8.js:
Imprime a soma das idades dos objtos do Array que foi dado.

Utilização do método `reduce` como proposto no exercício.


### E9.js:
Imprime um objeto caso tenha alguém com menos de 25 anos.

Utilização do método `.find` para buscar a primeira pessoa que tenha menos de 25 anos, retornando o primeiro que aparecer, caso não tenha,retorna `undefined`.


### E10.js:
Imprime todos em que a idade é menor que 30 anos.

Utilização do método `.filter` para filtrar e retornar todos que têm menos de 30 anos, caso não tenha, retorna um array vazio `[]`.
