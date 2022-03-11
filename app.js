const {multiplicar} = require('./helpers/multiplicar');

console.clear();
multiplicar(5)
    .then(nombreArchivo => console.log(nombreArchivo, ' creado'))
    .catch(err => console.log(err));