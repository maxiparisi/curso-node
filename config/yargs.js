const argv = require('yargs')
                .option(
                    'n', {
                        alias: 'numero',
                        describe: 'Numero al cual se va a multiplicar',
                        demandOption: true,
                        type: 'number'
                    })
                .option(
                    'l', {
                        alias: 'listar',
                        describe: "Muestra la tabla en consola",
                        demandOption: false,
                        type: 'boolean',
                        default: false
                    }
                )
                .option(
                   'h',{
                       alias: 'hasta',
                       describe: 'Numer hasta el cual se va a multiplicar' ,
                       demandOption: true,
                       type: 'number'
                    } 
                )
                .check((argv, options) => {
                    if(isNaN(argv.numero)){
                        throw 'El multiplicador tiene que ser un numero';
                    }
                    if(isNaN(argv.hasta)){
                        throw 'El Hasta tiene que ser un numero';
                    }
                    return true;
                })
                .argv;


module.exports = argv;