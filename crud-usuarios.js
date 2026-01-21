const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let usuarios = [];
let proximoID = 1;



function perguntar(texto, callback) {
    rl.question(texto, (resposta) => {
        callback(resposta);
    })
}
function acharIndicePorId(id){
    for(let i =0; i < usuarios.length; i++) {
        if (usuarios[i].id === id) {
            return i;
        }
    }
    return -1
}

function cadastrarUsuarios () {
    console.log("\n Cadastar usuario");
    perguntar("Nome: ", (nome) => {
        perguntar("Senha: ", (senha) => {
            perguntar("Idade: ", (idadeStr) => {
               
                    nome = nome.trim();
                    senha = senha.trim();
                    const idade = Number(idadeStr);
        

                    if (!nome || !senha || Number.isNaN(idade)) {
                        console.log("ERRO: Dados errados");
                        return menu();
                    }

                    for (let i = 0; i < usuarios.length; i++) {
                        if (usuarios[i].nome === nome) {
                            console.log("ERRO: Nome já existe")
                            return menu();
                        }
                    }

                    const usuario = {
                        id: proximoID,
                        nome: nome,
                        idade: idade,
                        senha: senha

                    }

                    usuarios.push(usuario)
                    proximoID++

                    console.log("Usuario cadastrado com sucesso!!! ID: ", usuario.id);

                    menu()

                })
            })
        })
    }
    function listarUsuarios() {
        console.log("LISTAR USUARIOS");
    
        if (usuarios.length === 0) {
            console.log("Nenhum Usuario cadastrado.");
            return menu()
        }
    
        for (let i = 0; i < usuarios.length; i++) {
            console.log("Usuario cadastrado.");
            const u = usuarios[i];
            console.log(
                "ID: ", u.id,
                "| Nome: ", u.nome,
                "| Senha: ", u.senha,
                "| Idade: ", u.idade,
            )
        }
        menu()
    }
    function deletarUsuario() {
        console.log("Deletar Usuario");
    
        perguntar("Digite o ID: ", (idStr) => {
            const id = Number(idStr);
            if (Number.isNaN(id)) {
                console.log("Erro: ID invalido")
                return menu();
            }
    
            const posicao = acharIndicePorId(id);
    
            if (posicao === -1) {
                console.log("Usuario não encontrado");
                return menu();
            }
    
            usuarios.splice(posicao, 1);
    
            console.log("Deletado com sucesso");
            menu();
        })
    }
    function editarUsuario() {
        console.log("editar Usuario");
    
        perguntar("Digite o ID: ", (idStr) => {
            const id = Number(idStr);
            if (Number.isNaN(id)) {
                console.log("Erro: ID invalido")
                return menu();
            }
    
            const posicao = acharIndicePorId(id);
    
            if (posicao === -1) {
                console.log("Usuario não encontrado");
                return menu();
            }
    
            const usuario = usuarios[posicao];
    
            perguntar(`Novo nome(${usuario.nome})`, (novoNome) => {
                perguntar(`Nova idade(${usuario.idade})`, (novaIdade) => {
                    perguntar(`Nova senha (${usuario.senha})`, (novaSenha) => {
                            novoNome = novoNome.trim();
                            if (novoNome) {
                                usuario.nome = novoNome;
                            }
    
                            novaIdade = novaIdade.trim();
                            if (novaIdade) {
                                usuario.idade = novaIdade;
                            }
    
                            novaSenha = novaSenha.trim();
                            if (novaSenha) {
                                const nSenha = Number(novoAno);
    
                                if (Number.isNaN(nSenha)) {
                                    console.log("ERRO: Valor Errado");
                                }
    
                                usuario.idade = novaIdade;
                            }
    
                            console.log("Usuario atualizado com sucesso!");
                            menu();
                        })
                    })
                })
            })
        }
    
    


function mostrarMenu () {
    console.log("\n======================");
    console.log("    CRUD USUÁRIOS");
    console.log("========================");
    console.log("1) Cadastrar usuário");
    console.log("2) Listar usuários");
    console.log("3) Vizualizar usuários (por ID)");
    console.log("4) Editar usuário");
    console.log("5) Deletar usuário");
    console.log("0) Sair");
    console.log("=========================");
}

function menu() {
    mostrarMenu();
    perguntar("Escolha uma opção: ", (opcao) => {
        opcao = opcao.trim();
        switch (opcao) {
            case "1":
                cadastrarUsuarios();
                break;
            case "2":
                listarUsuarios();
                break;
            case "3":
                vizualizarUsuarios();
                break;
            case "4":
                editarUsuario();
                break;
            case "5":
                deletarUsuario();
                break
            case "0":
                console.log("Saindo ...");
                rl.close();
                break;
            default:
                console.log("Opção Inválida")
                menu();
                break;
        }
    }
    )
}


menu();
