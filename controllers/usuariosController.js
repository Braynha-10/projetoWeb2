const {Usuario} = require('../models');
const {Router} = require('express');

const roteador = Router();
//-------------------------------------------------------------------------------------
//Pagina home
roteador.get('/', async(req, res)=>{
    res.render('usuarios/home');
});
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
//pagina cadastro
roteador.get('/novo', (req, res) => {
    res.render('usuarios/cadastro'); // Exibe o formulário de cadastro
});

roteador.post("/novo", async(req, res)=>{
    const { username, password, patch } = req.body;

    try {
        // Salvar no banco de dados
        await Usuario.create({ username, password, patch });
        res.redirect('/usuarios/login'); // Redireciona para login após o cadastro
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).send('Erro ao cadastrar usuário');
    }
});
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
//pagina login
roteador.get('/login', (req, res) => {
    res.render('usuarios/login'); // Exibe o formulário de login
});

roteador.post("/login", async(req, res)=>{
    const { username, password } = req.body;
    console.log(req.body); // Verifica se os valores username e password estão corretos

    try {
        // Busca o usuário no banco
        const usuario = await Usuario.findOne({ where: { username } });

        // Verifica se o usuário existe e a senha está correta
        if (usuario && usuario.password === password) {
             // Armazena o usuário na sessão
            req.session.usuario = { 
                username: usuario.username,
                patch: usuario.patch // Armazena o patch, se necessário
            };
            // Verifique se o usuário está logado
            if (req.session.usuario) {
                res.render('usuarios/perfil', {
                    usuario: req.session.usuario // Passa o usuário para o template EJS
            })};
        } else {
            res.status(401).send('Credenciais inválidas');
        }
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        res.status(500).send('Erro ao autenticar usuário');
    }
});
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
//pagina perfil
roteador.get('/perfil', (req, res) => {
    console.log(req.session.usuario);
    // Verifique se o usuário está logado
    if (req.session.usuario) {
        res.render('usuarios/perfil', {
            usuario: req.session.usuario // Passa o usuário para o template EJS
        });
    } else {
        res.status(401).send('Você precisa estar logado para acessar esta página');
    }});

roteador.patch("/perfil", async(req, res)=>{

});
//-------------------------------------------------------------------------------------


module.exports = roteador