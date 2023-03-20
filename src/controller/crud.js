const DB = require('db')
const controller = {
    veiculos: [],
    read() {
        controller.veiculos = JSON.parse(DB.read)
    },
    create({id, placa, chassi, renavam, modelo, marca, ano}) {
        const data = { id, placa, chassi, renavam, modelo, marca, ano }
        controller.veiculos.push(data)
        DB.write(controller.veiculos)
    }
}