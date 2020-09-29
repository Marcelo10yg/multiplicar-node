const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla multiplicar', opts)
    .command('crear', 'genera un archivo con la tabla de multiplcar', opts)
    .help()
    .argv;


module.exports = {
    argv
}