# React-JS Rocket-X Launches App

<br />

O App foi escrito para ser cliente de uma API que consome dados de outra API externa, a API da **SpaceX REST API**. Dessa forma, a API que se conecta diretamente com este App cria um pequeno serviço de dados, na forma de uma API REST, disponibilizando apenas 04 rotas para os seguintes dados da API externa:[^1]

- Próximo lançamento;
- Último lançamento;
- Próximos lançamentos;
- Lançamentos passados;

<br />

[O site da empresa SpaceX](https://www.spacex.com/)

<br />

Este app utiliza a dependência React-router-dom para montar um sistema de roteamento de páginas internas:

1. Home page
2. Login
3. Error page

<br />

Utiliza, ainda, aquela mesma dependência para criar links e navegação autômática para a Home page, após o credenciamento do usuário na página de login. 


<br />

Em termos mais gerais, o app trabalha os seus estados internos através do Hook **UseState**, conquanto que para os estados reaproveitados em vários componentes, se utiliza do Hook **UseContext**, para gerenciar um contexto global de variáveis de estado.


<br />

Um exemplo desse controle global de estados é feito com o valor da variável de 'Query', que é definida em contexto global, mas é setada dinamicamente pelo usuário em Home.js e vai definir também a renderização condicionada do título do componente LaunchList.js.  

<br />

As requisições Fetch de dados na API são controladas e monitoradas pelo Hook **UseEffect**.

<br />

Finalmente, na estilização são usados arquivos de CSS ligados pelos componentes interessados na renderização daqueles estilos, salvo no caso dos pequenos que ficam responsáveis pelos seus próprios estilo utilizando-se da biblioteca **Styled Components**.


<br />

### Imagem da Home page com as rotas para a API não disponibilizadas e pedindo ao usuário se credenciar:

![Imagem da Home page com as rotas para a API não disponibilizadas](/public/images/reactjs-rocket-launches-app-00.png)

<br />

### Abaixo vemos a imagem da página de Login, ao lado de uma mensagem de log do navegador alertando de erro 401 (Não Autorizado) para a tentativa de requição feita na API sem o credenciamento do usuário:

![Abaixo vemos a imagem da página de Login, ao lado de uma mensagem de log do navegador](/public/images/reactjs-rocket-launches-app-01.png)

<br />


### Imagem do console do navegador mostrando a confirmação da criação do usuário e o recebimento do token de acesso:

![Imagem do console do navegador mostrando a confirmação](/public/images/reactjs-rocket-launches-app-02.png)

<br />

### Feito o credenciamento do usuário, o app navega automaticamente para a Home page que agora renderiza ao rotas para a API liberadas:

![Imagem do sistema do roteamento para a página inicial](/public/images/reactjs-rocket-launches-app-03.png)

<br />

### Imagem da renderização para a busca **'last' mission** (última missão):

![Imagem da renderização para a busca last mission](/public/images/reactjs-rocket-launches-app-04.png)

<br />

### Imagem da renderização para a busca **'past' mission** (missões passadas):

![Imagem da renderização para a busca past mission](/public/images/reactjs-rocket-launches-app-05.png)

<br />




<br />
<br />

[^1]: [SpaceX REST API - Github](https://github.com/r-spacex/SpaceX-API)
