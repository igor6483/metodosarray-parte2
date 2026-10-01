const usuarios = [ 
{ id: 1, nome: "Ana Silva", idade: 22, ativo: true, cargo: "Desenvolvedora" }, 
{ id: 2, nome: "Bruno Costa", idade: 17, ativo: true, cargo: "Estagiário" }, 
{ id: 3, nome: "Carlos Souza", idade: 30, ativo: false, cargo: "Designer" }, 
{ id: 4, nome: "Diana Lima", idade: 25, ativo: true, cargo: "Tech Lead" } 
];

const listaUsuarios = usuarios.map(usuarios =>
    usuarios = usuarios.nome + " é " + usuarios.cargo)
    

console.log(`lista resumida ${listaUsuarios}`)


const buscarUsuarioPorId = (id) => usuarios.find(usuario =>
    usuario.id === id)

    console.log("Buscar ID 2:", buscarUsuarioPorId(2))



const listarUsuariosAtivos = usuarios.filter(ativos =>
    ativos.ativo === true
)
console.log("ativos: ",listarUsuariosAtivos)


const existeUsuarioInativo = usuarios.some(usuario =>
   usuario.ativo === false
)


    console.log("Há inativos?", existeUsuarioInativo) 

const todosUsuariosMaioresDeIdade = usuarios.every (idade =>
    idade.idade >= 18
)

console.log("Todos maiores de idade?", todosUsuariosMaioresDeIdade)

const calcularMediaIdade = usuarios.reduce((soma,soma2) =>{
    return (soma + soma2.idade)},0) / 4

  console.log("Média de idade:", calcularMediaIdade); 