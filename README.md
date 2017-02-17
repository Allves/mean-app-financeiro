# MEAN-APP-FINANCEIRO

### Instalação
Requisitos:

  - NodeJS instalado
  - MongoDB instalado

Inicie o mongoDB com o comando 
```
    mongod
```

Caso tenha problemas com a inicialização ou instalação do mongoDB, utilize a documentação oficial como referência disponísvel em: https://www.mongodb.com/

Instale as dependências de ambos os projetos utilizando o comando
```sh
    npm install
```

Vá até a pasta backend e rode o comando para iniciar o servidor backend através do pm2
```sh
    npm run production
```

Caso deseje encerrar o servidor por quaisquer motivos, utilize o comando
```sh
    pm2 delete backend
```

Inicie o front-end com o comando
```
    npm run dev
```
