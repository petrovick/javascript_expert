// para importar do diretorio use o comando abaixo
// node --experimental-specifier-resolution=node index.js

// import FluentSQLBuilder from './../fluentsql-jest-tdd-yt'
import FluentSQLBuilder from '@petrovickg/fluentsql'

import database from './database/data.json'

const result = FluentSQLBuilder.for(database)
    .where({ registered: /^(2020|2019)/ })
    .select(['category'])
    .limit(3)
    .countBy('category')
    // .groupCount('name')
    .build()

console.log({ result })