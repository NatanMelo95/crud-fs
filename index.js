const express = require('express');
const app = express();
const port = 3000;

const control = {
    veiculos: [],
    read() {
        return control.veiculos = JSON.parse(fs.readFileSync('./src/data/veiculos.json', { encoding: 'utf8' }))
    },
    create({id, placa, chassi, renavam, modelo, marca, ano}) {
        const data = { id, placa, chassi, renavam, modelo, marca, ano }
        control.veiculos.push(data)
        fs.writeFileSync('./src/data/veiculos.json', JSON.stringify(control.veiculos), { encoding: 'utf8' })
    }
}

app.get('/', (req, res) => {
    document.write("Hello Wolrd")
    console.log(control.read())
})
app.get('/:id', (req, res) => {

})
app.post('/', (req, res) => {
    placa = req.body.placa
})
app.post('/:id', (req, res) => {
    
})
app.put('/:id', (req, res) => {
    
})
app.delete('/:id', (req, res) => {
    res = control.create
})

app.listen(port);
console.log('rodando na porta', port);