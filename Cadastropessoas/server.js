const express = require("express");
const mysql = require("mysql2");

const app = express();

const port = 3000;

// ==========================================
// CONFIGURAÇÃO DO BANCO DE DADOS
// ==========================================

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cadastro",
    port: 3306
});

// ==========================================
// MIDDLEWARES
// ==========================================

// Permite que o Express receba JSON
app.use(express.json());

// Permite acessar os arquivos HTML, CSS e JavaScript
// que estão dentro da pasta public
app.use(express.static("public"));

// ==========================================
// TESTE DA CONEXÃO COM O BANCO
// ==========================================

conexao.connect((erro) => {

    if (erro) {

        console.error("Erro ao conectar ao banco:");
        console.error(erro);

        return;
    }

    console.log("Conectado ao banco de dados com sucesso!");

});

// ==========================================
// API REST
// ==========================================


// ==========================================
// 1 - CONSULTAR TODAS AS PESSOAS
// GET /api/pessoas
// ==========================================

app.get("/api/pessoas", (req, res) => {

    const nomePesquisa = req.query.nome || "";

    let sql = "SELECT * FROM pessoas";

    let params = [];

    // Se foi informado um nome para pesquisa
    if (nomePesquisa) {

        sql += " WHERE nome LIKE ?";

        params.push(`%${nomePesquisa}%`);

    }

    sql += " ORDER BY nome";

    conexao.query(sql, params, (erro, resultados) => {

        if (erro) {

            console.error("Erro ao consultar pessoas:", erro);

            return res.status(500).json({
                erro: "Erro interno ao consultar pessoas."
            });

        }

        res.json(resultados);

    });

});


// ==========================================
// 2 - CONSULTAR UMA PESSOA PELO ID
// GET /api/pessoas/:id
// ==========================================

app.get("/api/pessoas/:id", (req, res) => {

    const id = req.params.id;

    const sql = "SELECT * FROM pessoas WHERE id = ?";

    conexao.query(sql, [id], (erro, resultados) => {

        if (erro) {

            console.error("Erro ao consultar pessoa:", erro);

            return res.status(500).json({
                erro: "Erro interno ao consultar pessoa."
            });

        }

        if (resultados.length === 0) {

            return res.status(404).json({
                erro: "Pessoa não encontrada."
            });

        }

        res.json(resultados[0]);

    });

});


// ==========================================
// 3 - INSERIR PESSOA
// POST /api/pessoas
// ==========================================

app.post("/api/pessoas", (req, res) => {

    const {
        nome,
        idade,
        telefone,
        cidade
    } = req.body;


    // ======================================
    // VALIDAÇÕES
    // ======================================

    if (!nome || nome.trim() === "") {

        return res.status(400).json({
            erro: "O nome é obrigatório."
        });

    }

    if (!idade || idade < 18 || idade > 24) {

        return res.status(400).json({
            erro: "A idade deve estar entre 18 e 24 anos."
        });

    }

    if (!telefone || telefone.trim() === "") {

        return res.status(400).json({
            erro: "O telefone é obrigatório."
        });

    }

    if (!cidade || cidade.trim() === "") {

        return res.status(400).json({
            erro: "A cidade é obrigatória."
        });

    }


    // ======================================
    // SQL
    // ======================================

    const sql = `
        INSERT INTO pessoas
        (nome, idade, telefone, cidade)
        VALUES (?, ?, ?, ?)
    `;

    const params = [
        nome,
        idade,
        telefone,
        cidade
    ];


    conexao.query(sql, params, (erro, resultado) => {

        if (erro) {

            console.error("Erro ao cadastrar:", erro);

            return res.status(500).json({
                erro: "Erro ao cadastrar pessoa."
            });

        }

        res.status(201).json({

            mensagem: "Pessoa cadastrada com sucesso!",

            pessoa: {
                id: resultado.insertId,
                nome: nome,
                idade: idade,
                telefone: telefone,
                cidade: cidade
            }

        });

    });

});


// ==========================================
// 4 - REMOVER PESSOA
// DELETE /api/pessoas/:id
// ==========================================

app.delete("/api/pessoas/:id", (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM pessoas WHERE id = ?";

    conexao.query(sql, [id], (erro, resultado) => {

        if (erro) {

            console.error("Erro ao remover:", erro);

            return res.status(500).json({
                erro: "Erro ao remover pessoa."
            });

        }

        if (resultado.affectedRows === 0) {

            return res.status(404).json({
                erro: "Pessoa não encontrada."
            });

        }

        res.json({
            mensagem: "Pessoa removida com sucesso!"
        });

    });

});


// ==========================================
// INICIALIZAÇÃO DO SERVIDOR
// ==========================================

app.listen(port, () => {

    console.log("");
    console.log("======================================");
    console.log("   SISTEMA DE CADASTRO DE PESSOAS");
    console.log("======================================");
    console.log(`Servidor: http://localhost:${port}`);
    console.log(`Sistema:  http://localhost:${port}/`);
    console.log("======================================");

});
