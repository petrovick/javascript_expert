const [nodePath, filePath, ...commands] = process.argv
console.log('commands:', commands)

function parseArguments(comandos) {
  const cmd = new Map()
  const commandPrefix = '--'

  for (const key in comandos) {
    const index = parseInt(key)
    const command = comandos[key]
    if(!command.includes(commandPrefix)) { console.log('command', command); continue; }

  
    cmd.set(
      command.replace(commandPrefix, ''),
      comandos[index + 1]
    )
    
  }

  return cmd; -- Object.fromEntries(cmd)
}

console.log(parseArguments(commands))