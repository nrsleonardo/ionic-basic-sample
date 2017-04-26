# ionic-basic-sample
Projeto simples utilizando o framework IONIC para complementar a palestra ministrada por Sidarta e Leonardo.
<br><br>

Requisitos:
- NodeJS

Windows e Mac: https://nodejs.org/en/download/

Linux
```
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ sudo apt-get install -y build-essential
```

<br><br>
Clonar o projeto no diretório desejado
```
$ git clone https://github.com/leonardoneris/ionic-basic-sample.git
$ cd ionic-basic-sample
```

<br><br>
Instalar as dependencias do IONIC (Caso ainda não tenha)
```
$ npm install -g cordova ionic
```

<br><br>
Instalar o Bower (Caso ainda não tenha)
```
$ npm install -g bower
```

<br><br>
Instalar as dependencias do projeto
```
$ npm install
$ bower install
```

<br><br>
Rodar a aplicação no modo desenvolvimento (Dev + Live reload)
```
$ ionic serve
```

<br><br>
Rodar a aplicação no modo comparativo (iOS View + Android View)
```
$ ionic serve --lab
```

<br><br>
Rodar a aplicação em um device conectado via USB
- Habilitar o USB debugging no aparelho
- Conectar via USB e aguardar o reconhecimento
- Executar os comandos em linha e aguardar
```
$ ionic build android
$ ionic run android
```

<br><br>
Links úteis
- Apresentação do workshop: https://goo.gl/Ta1piq
- Códigos do Hands On: https://github.com/driftyco/ionic-cli 
- Documentação completa do Ionic: http://ionicframework.com/docs/v1/
- Componentes de UI (Design) do Ionic: http://ionicframework.com/docs/v1/components/
- Componentes JavaScript do Ionic: http://ionicframework.com/docs/v1/api/
- Aos iniciantes em JavaScript: http://jstherightway.org/pt-br/
- Análise conceitual e aprofundada sobre Ionic: https://goo.gl/bkkOiH 
- Guia definitivo Hybrid vs Native: https://goo.gl/146ig4
