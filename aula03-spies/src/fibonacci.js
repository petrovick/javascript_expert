class Fibonacci {
    *execute (input, current = 0, next = 1) {
        console.count('input', input);
        console.count('current', current)
        console.count('next', next);

        if(input === 0) {
            return 0
        }
        console.log('current', current)
        // retorna o valor
        yield current
        // delega a função, mas nao retorna valor
        yield* this.execute(input -1, next, current + next)
    }
}

module.exports = Fibonacci