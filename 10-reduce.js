const produtos = [ 
{ id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true }, 
{ id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true }, 
{ id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false }, 
{ id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true } 
];

const quanti = produtos.reduce((quanti,quanti2) => {
 return quanti + (quanti2.estoque)},0)

const estoque = quanti

const valor = produtos.reduce((valor,valor2) => {
 return valor + (valor2.preco)},0)

 const final = valor

 const patrimonio = final * estoque

 console.log(patrimonio)

