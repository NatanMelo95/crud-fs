const DB = require('db')
const app = require('./app').Router()
const control = {
    veiculos: [],
    read() {
        return control.veiculos = JSON.parse(DB.read)
    },
    create({id, placa, chassi, renavam, modelo, marca, ano}) {
        const data = { id, placa, chassi, renavam, modelo, marca, ano }
        control.veiculos.push(data)
        DB.write(control.veiculos)
    }
}

app.get('/', (req, res) => {
    document.write("Hello Wolrd")
    console.log(control.read())
})
app.get('/:id', (req, res) => {

})