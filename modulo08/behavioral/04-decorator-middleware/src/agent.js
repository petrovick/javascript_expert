import Http from 'http'
async function InjectHttpInterceptor() {
    const oldEmit = Http.Server.prototype.emit;
    Http.Server.prototype.emit = function (...args) {
        console.log('args 11')
        console.log(JSON.stringify(args, null, 2))
        console.log('args 22')
        const [ type, req, response] = args

        if(type === "request") {
            response.setHeader('X-Instrumented-By', 'ErickWendel')
        }

        return oldEmit.apply(this, args)
    }

}

export { InjectHttpInterceptor }