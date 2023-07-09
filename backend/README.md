## Instalação Back End

npm init -y

# Dependências que são importantes nos dois modos da aplicação

npm i --save -E body-parser@.15.2 express@4.14.0 mongoose@4.7.0 node-restful@0.2.5 pm2@2.1.5
//body-parser - usado para converter um body para json
//express 
//mongoose - lib que acessa banco de dados e mapeamento e validações
//node-restful - simplifica a construção da api
//pm2 - launcher - inicia a aplicação com mais robustêz, ver erros e logs


# Dependências apenas no modo de desenvolvimento

npm i --save-dev -E nodemon@1.11.0

# Providências para configurar o projeto:
- Alterar o arquivo inicial em package.json de 'index' para - "main": "src/loader.js",
- na pasta scripts retirar "test": "echo \"Error: no test specified\" && exit 1"
	e colocar:
	"dev": "nodemon",
	"production": "pm2 start src/loader.js --name todo-app",

## alteração packge.json
'''
 "main": "src/loader.js",
  "scripts": {
    "dev": "nodemon",
	  "production": "pm2 start src/loader.js --name todo-app"
  },
'''

## Criando loader e server

loader carrega os principais arquivos de configuração
server indica a porta
bodyparser decodifica o corpo da aplicação


## Instalações Front end

npm init -y
npm i --save-dev webpack@1.14.0 webpack-dev-server@1.16.2
npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-plugin-react-html-attrs@2.0.0 babel-plugin-transform-object-rest-spread@6.22.0 babel-preset-es2015@6.22.0 babel-preset-react@6.22.0
npm i --save-dev extract-text-webpack-plugin@1.0.1 css-loader@0.26.1 style-loader@0.13.1 file-loader@0.9.0
npm i --save-dev bootstrap@3.3.7 font-awesome@4.7.0
npm i --save-dev react@15.4.2 react-dom@15.4.2 react-router@3.0.2 axios@0.15.3