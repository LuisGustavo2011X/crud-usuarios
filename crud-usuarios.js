const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

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
            case "1": return cadastrarUsuarios();
            case "2": return listarUsuarios();
            case "3": return vizualizarUsuarios();
            case "4": return editarUsuario();
            case "5": return deletarUsuario();
            case "0":
            console.log("Saindo...");
            rl.close();
            return;
        default:
            console.log("Opção inválida!");
        }
    })
}