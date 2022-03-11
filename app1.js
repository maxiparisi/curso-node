const {multiplicar} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
// console.log(process.argv); argumentos primitivos de node
// console.log(argv); argumentos obtenidos con la libreria yargs
multiplicar(argv.numero, argv.hasta, argv.listar)
    .then(nombreArchivo => console.log(colors.rainbow(nombreArchivo), ' creado'.rainbow))
    .catch(err => console.log(err));