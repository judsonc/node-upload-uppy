# node-sequelize-api

Para instalar as dependências:
```sh
$ yarn
```

Executar a aplicação em modo desenvolvimento na porta 5000:
```sh
$ yarn local
```

### Bancos de dados

#### PostgreSQL

Executar as migrations do sequelize com o comando:

```sh
$ yarn migrate-run
```

E executar os seeds com uma pequena massa de dados com o comando:

```sh
$ yarn seed-run
```

#### Variáveis de ambiente

 - `PORT`: porta da aplicação web;
 - `POSTGRES_USERNAME`: usuário de acesso do PostgreSQL;
 - `POSTGRES_PASSWORD`: senha de acesso do PostgreSQL;
 - `POSTGRES_HOST`: endereço do host do PostgreSQL;
 - `POSTGRES_PORT`: porta do PostgreSQL;
 - `POSTGRES_DATABASE`: nome do banco de dados;
 - `POSTGRES_LOG`: visualizar logs PostgreSQL;
