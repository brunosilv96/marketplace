# Mini Marketplace com Clean Arquiteture

O intuito deste projeto é criar um pequeno back-end marketplace API utilizando as entruturas e conceitos da arquitetura limpa, respeitando ao máximo o principios do SOLID para princios de aprendizado.

## Pré instalação

O sistema utiliza uma imagem docker do MongoDB para salvar as informações no BD local
Rodar o seguinte comando para montar o container com a imagem mongo:

```bash
  docker run --name mongo -d -p 27017:27017 mongo
```

## Instalação do projeto

Instale marketplace com yarn

Clonar projeto:

```bash
  git clone https://github.com/brunojcpm/marketplace.git
```

Instalação:

```bash
  cd marketplace
```

```bash
  yarn install
```

A principio, o projeto possui apenas script de desenvolvimento, rodar usando:

```bash
  yarn dev
```

A resposta ao comando acima, deve aparecer no console:

```bash
  EXPRESS:3000
  MONGO:27017
```

## Cadastrando um usuário (Teste de rota)

Usando Postman ou Insôminia, realizar um POST na rota abaixo:

```bash
  POST: http://localhost:3000/user/newUser
```

Com o body:

```bash
  {
    "name": "Joe Doe",
    "email": "joedoe@email.com",
    "password": "1234",
    "phone": "(11) 99999-9999"
  }
```

O retorno deve ser um novo usuário com 'id' mongo e status 200

## Aprendizados

-   Conhecimento mais aprofundado em orientação a objetos com TS
-   Conceitos SOLID na prática
-   Inverção e Injeção de Dependências
-   Aplicações iniciais do Docker e MongoDB

E muito mais está por vir...
