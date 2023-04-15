import { createServer } from 'http'

import Events from 'events'
import { randomBytes } from 'crypto'
const myEvent = new Events()

function getBytes() {
    console.log('Passo 4');
    return randomBytes(10000)
}

function onData() {
    console.log('Passo 3');
    getBytes()
    const items = []
    for (let index = 0; index < 10000; index++) {
            items.push(Date.now())
    }
    // setInterval(function myInterval() { 
    //     items.push(Date.now())
    //  })
}

myEvent.on('data', onData)
createServer(function handler(request, response) {
    console.log('Passo 1');
    
    myEvent.emit('data', Date.now())
    console.log('Passo 2');
    response.end('ok')
}).listen(8080, () => console.log('running at 3000'))

