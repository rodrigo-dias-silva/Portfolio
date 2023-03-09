# Portfólio

> Bem-vindos ao repositório do meu portfólio.

## Sobre o projeto

Nesse porjeto eu decidi colocar em prática meu conhecimento com React usando a ferramenta Vite JS para construção do front-end.

## Tecnologias

- React
  - Vite como ferramenta para criação do front-end.
- Typescript
- Tailwind
  - Framework de estilização/CSS.

### Bibliotecas utilizadas:

- Axios
  - Dependencia usada para buscar a lista dos repositórios por meio da API do Github.
- React-router-dom
  - Biblioteca para o controle de rotas da aplicação.
- Lottie-react
  - Biblioteca para animações em formato JSON.
- Phosphor-react
  - Biblioteca de icones.



## O projeto conta com as páginas:

* Home
* Projects
* Error

### Home

> Estrutura separada entre header, sections e footer. Conta com a utilização de animação JSON na versão WEB por meio da lib lottie-react, deixando a animação mais leve e performática.

> Na section projetos decidi deixar os projetos estáticos consumindo info pré-estabelecida no arquivo api.ts.


### Projects

> Realizei uma estruturação com header, footer e grid simples para distribuição dos Cards que são exibidos de acordo com a api do Github, que está sendo consumida por intermédio da lib axios.


### Error

> Página de erro 404 que conta com header e uma section com animação JSON por meio da lib lottie-react e textos simples.


## Deploy

Projeto encontra-se funcional e em produção.
> Utilizei a plataforma Vercel para deploy.

> <a href='https://portfolio-iamdgos.vercel.app/'>Link do portfólio</a>
