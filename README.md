# agencia-api-rest

> Descrição:
### API Rest desenvolvida para realizar o CRUD (create, read, update, delete) de serviços de viagem. Utilizando recursos do node.js com express, sequelize (para trabalhar com serviços do banco de dados), o SGBD é o postgres, biblioteca Multer para fazer upload de arquivos e documentação em Swagger.

![Captura de tela 2025-07-06 184708](https://github.com/user-attachments/assets/90fb95ff-ea18-46f5-81a9-6e6225b9bc0d)
![Captura de tela 2025-07-06 184802](https://github.com/user-attachments/assets/f7689ee6-baf0-4686-94df-5397a09bcdc1)

## Crie o .env e preencha:
~~~
DATABASE=escola
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=123456

TOKEN_SECRET=aosdjfo4a354asdfasjfaois6ASDFasdfasdA879
TOKEN_EXPIRATION=7d # tempo de expiração

APP_URL=http://localhost
APP_PORT=3001
~~~

> Execução:

### Instale as bibliotecas:
~~~
npm i
~~~

### Execute o seguinte comando:
~~~
npm run dev
~~~
