## Heroes-Search

### Instalando o projeto

* Acesse a pasta onde será instalado a aplicação via terminal;
* Faça o clone do projeto digitando a seguinte instrução na linha de comando;


	  git clone  https://github.com/marciovz/heroes-search.git

* Entre na pasta Heroes-Search e instale os packages do projeto;

	
      npm install


### Configurações do projeto

* Abra o arquivo config.js que encontra-se na pasta src/config;
* Coloque suas chaves de acesso a api da Marvil nos locais indicados;

```javascript
key: {
	pubKey: "INSIRA AQUI SUA PUBLIC KEY",
	privateKey: "INSIRA AQUI SUA PRIVATE KEY"	
},

```

obs.: Caso não possua as chaves de acesso, cadastre-se na site da [Marvel](http://developer.marvel.com/) para adquiri-las;


### Rodando o projeto

* Inicie o servidor NodeJS dentro da pasta Heroes-Search


		  node src/app.js
ou

		  nodemon app.js


* Acesse localhst:3000 no navegador para rodar a aplicação em um servidor local, ou a url da aplicação para um servidor dedicado;


	      localhost:3000

