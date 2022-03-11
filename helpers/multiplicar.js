const fs = require('fs');
const colors = require('colors');

const multiplicar = async (numero, hasta, listar) => {
    try {
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${numero} x ${i} = ${numero*i}\n`;
            consola += `${numero} ${colors.red('x')} ${i} = ${colors.blue(numero*i)}\n`;
        }

        if(listar){
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
        return `tabla-${numero}.txt`;
    } catch (error) {
        throw error;
    }

}

module.exports = {multiplicar}