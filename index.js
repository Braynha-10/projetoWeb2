const express = require("express");
const session = require('express-session');
const {usuarios} = require('./controllers/');
const path = require("path");
const methodOverride = require("method-override");

const app = express();

//Traduzir os dados do corpo da requisição para variáveis
app.use(express.urlencoded({extended: true}));

//Indica que o formato dos dados seja JSON
app.use(express.json());

//Chama a o method override a partir da query "_method"
app.use(methodOverride('_method'));

// Configuração do middleware express-session para manter o usuario numa sessao inciada apos o login
app.use(session({
    secret: 'opala123', // Usado para assinar o cookie de sessão
    resave: false, // Evita que a sessão seja salva novamente se não for modificada
    saveUninitialized: false, // Não salva sessões que não foram inicializadas
    cookie: { secure: false } // Defina como `true` se usar HTTPS
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/usuarios', usuarios);

app.listen(8080, ()=>{
    console.log("Ouvindo a porta 8080")
});