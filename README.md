## Projeto Web - Sistema Culinário com Login e Perfil
Este é um sistema web simples, desenvolvido com Node.js, Express e Sequelize para gerenciar o login de usuários e exibir o perfil após autenticação. O sistema permite que os usuários se autentiquem com um nome de usuário e senha e, se autenticados, possam acessar uma página de perfil.

### Funcionalidades
- Autenticação de Usuários: Os usuários podem se autenticar utilizando seu nome de usuário e senha.
- Persistência de Sessão: Utiliza Express-session para manter a sessão do usuário entre diferentes requisições.
- Página de Perfil: Após o login, o usuário pode acessar sua página de perfil, onde suas informações (nome de usuário e tipo de usuário) são exibidas.

### Tecnologias Usadas
- Node.js: Ambiente de execução para JavaScript no lado do servidor.
- Express: Framework para criação de APIs e servidores web.
- Sequelize: ORM (Object-Relational Mapper) para interagir com o banco de dados MySQL.
- MySQL: Banco de dados relacional utilizado para armazenar os dados dos usuários.
- EJS: Motor de templates para renderizar páginas HTML dinâmicas.
- Express-session: Middleware para gerenciar sessões do usuário.

### Estrutura de Diretórios
A estrutura do projeto é a seguinte:

- /projetoWeb2
- ├── /controllers
- │   └── usuariosController.js   # Controlador que gerencia as requisições de login e perfil
- ├── /models
- │   └── usuario.js              # Modelo do usuário para o banco de dados (Sequelize)
- ├── /views
- │   ├── /usuarios
- │   │   └── perfil.ejs          # Template EJS da página de perfil
- │   └── login.ejs               # Template EJS da página de login
- ├── /node_modules               # Dependências do projeto
- ├── /public                     # Arquivos estáticos (CSS, JS, imagens)
- ├── app.js                      # Arquivo principal do servidor Express
- ├── package.json                # Arquivo de dependências e scripts do projeto
- └── README.md                   # Documentação do projeto

### Configuração do Projeto
- Instalação de Dependências
- Clone este repositório:

#### git clone https://github.com/seuusuario/projetoWeb2.git
- *cd projetoWeb2*
- Instale as dependências:
- *npm install*
- *Configuração do Banco de Dados*
- *Crie um banco de dados no MySQL, por exemplo, sistema_login.*

- No arquivo de configuração do Sequelize, defina as credenciais de acesso ao banco de dados.

- Execute as migrações para criar as tabelas necessárias no banco de dados.

### Executando o Servidor
#### Para iniciar o servidor, use o comando:
- *node index.js*

- *O servidor estará disponível em http://localhost:8080.*

### Rotas:
- POST usuarios/login: Recebe os dados de login (username e password) e autentica o usuário.
- GET usuarios/perfil: Exibe a página de perfil do usuário autenticado. Requer que o usuário esteja logado (verificado através de sessão).
- GET usuarios/logout: Permite que o usuário se deslogue da aplicação.

#### Como Funciona
*Login: O usuário envia seu nome de usuário e senha através de um formulário na página de login. O servidor autentica o usuário verificando os dados no banco de dados e, se corretos, armazena as informações do usuário na sessão.*

*Página de Perfil: Após o login, o usuário é redirecionado para a página de perfil, onde pode visualizar seu nome de usuário e tipo de usuário. A sessão é mantida até que o usuário se deslogue.*

*Logout: O usuário pode se deslogar a qualquer momento, o que destrói a sessão e redireciona o usuário para a página de login.*

### Melhorias Futuras
- Validação de Senha: Utilizar bcrypt ou outra biblioteca para criptografar senhas e verificar a autenticidade de maneira segura.
- Cadastro de Usuário: Implementar uma página de cadastro de novos usuários com validação de dados.
- Feedback Visual no Frontend: Melhorar a interface de usuário, como adicionar mensagens de erro no frontend em caso de falhas no login.
- Redirecionamento e Proteção de Rota: Garantir que apenas usuários autenticados possam acessar certas rotas.

### Contribuindo
- Faça o fork deste repositório.
- Crie uma branch para sua modificação (git checkout -b minha-feature).
- Faça as modificações necessárias e commit com uma mensagem descritiva.
- Envie um pull request explicando suas mudanças.
