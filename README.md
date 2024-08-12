# Simple Product Register

Olá recrutadores e equipe, é um prazer conhecê-los e fazer parte deste processo seletivo. Meu nome é Gabriel Bortolote, todos me chamam carinhosamente de Borto. Este arquivo contém os detalhes do desenvolvimento do teste técnico, assim como instruções para executar o código em qualquer ambiente que tenha o Docker instalado.

## Requisitos

### Parte 1 | Arquitetura Back-End

- Crie um sistema Back-End, que mantém os dados de uma Entidade “Produto”. Essa entidade possui os atributos:
  - nome
  - descrição
  - valor
- Esse Back-End deve prover toda a manutenção dessa Entidade “Produto“:
  - incluir
  - remover
  - alterar
- Deve ser usada a stack Python+Django, com uma das opções abaixo:
  - Opção 1: Django Rest Framework para criação do backend de APIs **<--Opção escolhida**
  - Opção 2: Django utilizando Templates.
- Usar preferencialmente CBV para desenvolvimento das views.

### Parte 2 | Arquitetura Front-End

- Crie um sistema Front-End, que apresente os dados de sua Entidade “Produto”, da Parte 1.
- Esse Front-End deve prover toda a interface gráfica para manutenção da Entidade “Produto”, como  incluir Produto, Remover Produto etc.
- Deve ser usado uma das seguintes opções de stack para a construção deste Front-End:
  - Opção 1: ReactJS **<--Opção escolhida**
  - Opção 2: Caso não tenha conhecimento em ReactJS pode ser utilizado Django (Templates).

### Parte 3 | Infraestrutura

- Crie uma infraestrutura para esses sistemas, com as ferramentas **Docker** e **Docker Compose**.
- Nessa infraestrutura deverão existir 3 servidores:
  1. Front-End Server
  2. Back-End Server
  3. DB Server.
- No servidor Back-End-Server deve ser instalado o sistema da Parte 1.
- No servidor Front-End-Server deve ser instalado o sistema da Parte 2.
- No servidor DB-Server deve ser instalado o banco de dados dos sistemas.
- O Banco de Dados deve ser **PostgreSQL**.
- Crie um README.md com instruções para instalação e inicialização dos sistemas em modo  desenvolvimento, ou seja, na máquina local.

## Solução

### Arquitetura Back-End

O Back-end foi implementado usando a linguagem Python e o DRF (Django Rest Framework). Usei uma estrutura simples contendo duas pastas.

1. A pasta **base** funcionará como um aplicativo Django nativo, contendo os arquivos que relacionam lógica e persistência: *models.py, views.py e serializers.py*;
2. A pasta **api** conterá configurações da API usando o DRF, assim como os testes relacionados a API.

Dentro do app **base** eu defini o modelo *Product* contendo os atributos necessários: *name, value e description*. No arquivo *serializer.py* defini um serializer padrão usando uma classe pré-definida do DRF (a ModelSerializer). E por fim, dentro do arquivo *views.py* defini uma CBV (Class-Based View), também usando uma classe pré-definida do DRF (a ModelViewSet). Essa combinação apesar de simples é muito poderosa, basta apenas configurar as URL's para que o CRUD do modelo Product já esteja funcionando.

Configurei as URL's do CRUD no endpoint */product/*, logo temos:

- **GET** /product/ -> lista todos os produtos
- **GET** /product/id/ -> retorna apenas o produto identificado
- **POST** /product/ -> cria um produto
- **PUT** /product/id/ -> atualiza os dados do produto identificado
- **DELETE** /product/id/ -> deleta o produto identificado.

Afim de garantir a qualidade e integridade da estrutura do back-end eu criei os testes unitários para cada endpoint do CRUD. Os testes podem ser encontrados dentro do arquivo *api/tests/test_product_crud.py*.

### Arquitetura Front-End

Para o front-end eu escolhi usar **ReactJS** sendo servido com o **NextJS**. O NextJS é um framework poderoso que traz muitas funcionalidades e facilidades para o React. A documentação do Next é bem completa e pode ser encontrada nesse link [https://nextjs.org/](https://nextjs.org/). A criação do front-end pode ser divida em duas etapas:

1. **Fetch**: nessa etapa implementei algumas funções para se comunicar com a API Django previamente criada. Todas essas funções podem ser encontradas no arquivo *frontend/src/app/adapters/APIAdapter.js*, são elas: *fetchProducts*, *createProduct*, *updateProduct*, *deleteProduct*. Os nomes são auto-descritivos, cada uma dessas funções retorna uma **promise**, pois são assíncronas, ao chamar uma dessas funções é necessário definir um callback de execução.
2. **Interface**: nessa etapa eu desenhei a aparência do sistema, fiz um sketch na ferramenta **Canva** para entender e visualizar como eu gostaria que o sistema se parecesse. Usei fontes e cores originais do site da **BNEX**. Depois bastou criar os componentes, eles podem ser encontrados dentro da pasta *frontend/src/app/components*. Para estilizar os componentes usei **Tailwind**, uma maneira simples de se estilizar usando classes pré-definidas ao invés de criar as próprias classes CSS.

### Infraestrutura

A infraestrutura da aplicação foi feita usando 3 docker containers, como sugerido, eis aqui os seus nomes e funções:

- **db**: o container de persistência da aplicação. Ele executa um serviço *postgresql* e esta conectado com o sistema backend;
- **api**: o servidor back-end, contendo a aplicação **Django** implementando a API que se comunicará com a aplicação;
- **app**: o servidor front-end, contendo uma aplicação **NextJs** implementando a aplicação que será acessada pelo usuário.

## Como rodar?

Para rodar essa aplicação basta possuir o **docker** instalado no ambiente. Da mesma forma o módulo **compose** deve estar instalado no docker, para que seja possível executar o comando **docker compose**.

Para executar a aplicação basta abrir um terminal na pasta raiz do projeto e executar:

```bash
docker compose up --build
```

Todos os serviços serão levantados e estarão rodando através do docker. Uma vez estando todos os serviços rodando é possível acessar as aplicações:

1. Front-End: para acessar a aplicação front-end abra o seu navegador e acesse o link [localhost:3000](http://localhost:3000).
2. Back-End: para acessar a aplicação back-end você pode usar o navegador, acessando o link [localhost:8000](http://localhost:8000), o DRF oferece uma interface HTML e é possível navegar pelos endpoints através dela. Ou você pode usar algum programa que faça requests, como postman, curl e etc.
3. Banco de dados: o banco de dados é um serviço que toda na porta 5432 (padrão do Postgres), para acessar esse serviço é necessário ter um postgres client instaldado na máquina, isso é, alguma aplicação que consiga se comunicar com o serviço Postgres, como o dbeaver ou o psql. As credenciais para acessar o banco estão dentro do arquivo *.env*.

Também é possível executar os testes do serviço back-end, para isso abra um terminal e execute o seguinte comando:

```bash
docker exec api python manage.py test
```

Esse comando vai executar o comando de teste dentro do container docker responsável pelo back-end. O seguinte output deve ser exibido:

```bash
Creating test database for alias 'default'...
Found 5 test(s).
System check identified no issues (0 silenced).
.....
----------------------------------------------------------------------
Ran 5 tests in 0.022s

OK
```
