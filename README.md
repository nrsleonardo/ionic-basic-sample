# ionic-basic-sample
Projeto simples utilizando o framework IONIC para complementar a palestra ministrada por Sidarta e Leonardo.


Requisitos:
- NodeJS

Windows e Mac: https://nodejs.org/en/download/

Linux
```
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ sudo apt-get install -y build-essential
```


Clonar o projeto no diretório desejado
```
$ git clone https://github.com/leonardoneris/ionic-basic-sample.git
$ cd ionic-basic-sample
```


Instalar as dependencias do IONIC (Caso ainda não tenha)
```
$ npm install -g cordova ionic
```


Instalar o Bower (Caso ainda não tenha)
```
$ npm install -g bower
```


Instalar as dependencias do projeto
```
$ npm install
$ bower install
```


Rodar a aplicação no modo desenvolvimento (Dev + Live reload)
```
$ ionic serve
```


Rodar a aplicação no modo comparativo (iOS View + Android View)
```
$ ionic serve --lab
```
