import yargs from 'yargs';
import  {hideBin} from 'yargs/helpers'

export const yarg  = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Multiplicacion base',
        demandOption: true
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        describe: 'multiplicacion limite',
        default: 10
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        describe: 'Listar la tabla de multiplicar',
        default: false
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        describe: 'Nombre del archivo',
        default: 'tabla'
    })
    .option('d', {
        alias: 'directory',
        type: 'string',
        describe: 'Directorio del archivo',
        default: 'output'
    })
    .check((argv, options) => {
        if(argv.b < 1) throw 'El nuevo valor de la base debe ser mayor a 1 o igual a 1';
        return true;
    })
    .parseSync();