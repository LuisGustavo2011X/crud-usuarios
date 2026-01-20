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
    for(let i =0; i < carros.length; i++) {
        if (carros[i].id === id) {
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
                        senha: senha,

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
