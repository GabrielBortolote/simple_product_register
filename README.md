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
