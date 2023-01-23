# Task Checklist

- [x] creates `src` main folder if it not exists
- [x] creates `repository` layer
- [x] creates `service` layer with `repository` as dependency
- [x] creates `factory` layer with `service` and `repository` returning its instances
- [ ] can create multiples domains with a single comand
- [x] saves files as `camelCase` and classes as `PascalCase`
- [x] reaches **100% test coverage**
- [x] integration tests should validate files on disk as a valid JS class



## Como Gerar executável de node no linux

Coloca no arquivo index.js
```
#!/usr/bin/env node
// Daqui pra frente o contúdo do do arquivo em javascript/node
```

Faça também alteração no arquivo package.json, adicionando a chave a seguinte:
```
bin: {
  "palavraChave": "./src/index.js"
}
```

Após isso, criei o comando executando o npm link
```
npm link
```

Agora basta rodar o comando no linux
```
palavraChave --help
```