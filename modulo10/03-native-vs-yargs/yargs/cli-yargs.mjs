import yargs from 'yargs'
import { hideBin } = from 'yargs/helpers'

const hero = ({name, age, power}) => ({ name, age, power, id: Date.now()})

const {argv} = yargs(hideBin(process.argv))
  .command('createHero', 'create a hero', (builder) => {

    return builder
      .option('name', {
        alias: 'n',
        demand: true,
        describe: 'Hero name',
        type: 'string'
      })
      .option('age', {
        alias: 'n',
        demand: true,
        describe: 'Hero age',
        type: 'number'
      })
      .option('power', {
        alias: 'n',
        demand: true,
        describe: 'Hero power',
        type: 'string'
      })
      .example('createHero --name Flash --age 55 --power Speed', 'Create a hero')
      .example('createHero --n Flash --a 55 --p Speed', 'Create a hero')
  })
  .epilog('copyright 2023 - Gabriel Petrovick Corporation')

  console.log(hero(argv))