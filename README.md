# Simple Product Register

Olá recrutadores e equipe, é um prazer conhecê-los e fazer parte deste processo seletivo. Meu nome é Gabriel Bortolote, todos me chamam carinhosamente de Borto. Este arquivo contém os detalhes do desenvolvimento do teste técnico, assim como instruções para executar o código em qualquer ambiente que tenha o Docker instalado, boa leitura.

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

O Back-end foi implementado usando a linguagem Python, o framework Django Rest Framework. Usei uma estrutura simples contendo duas pastas.

1. A pasta **base** funcionará como um aplicativo django, contendo os arquivos que relacionam lógica e persistência: *models.py, views.py e serializers.py*;
2. A pasta **api** conterá configurações da API usando o Django Rest Framework (DRF), assim como os testes relacionados a API.

Dentro do app **base** eu defini o modelo *Product* contendo os atributos necessários: *name, value e description*. No arquivo *serializer.py* defini um serializer padrão usando uma classe pré-definida do DRF (a ModelSerializer). E por fim dentro do arquivo *views.py* defini uma CBV (Class-Based View), também usando uma classe pré-definida do DRF (a ModelViewSet). Essa combinação apesar de simples é muito poderosa, basta apenas configurar as URL's para que o CRUD do modelo Product já esteja funcionando.

Configurei as URL's do CRUD no endpoint */product/*, logo temos:

- GET /product/ -> lista todos os produtos
- GET /product/id/ -> retorna apenas o produto identificado
- POST /product/ -> cria um produto
- PUT /product/id -> atualiza os dados do produto identificado
- DELETE /product/id -> deleta o produto identificado

Afim de garantir a qualidade e integridade da estrutura do Back-End eu criei os testes unitários para cada endpoint do CRUD. Os testes podem ser encontrados dentro do arquivo *api/tests/test_product_crud.py*.
