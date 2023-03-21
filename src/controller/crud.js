const DB = require('../data/connection')
const veiculos = require('../model/veiculos')
const fs = require('fs')
const router = require('express').Router()
module.exports = router;
let veiculo = []
const control = {
    read() {
        veiculo = JSON.parse(fs.readFileSync('../data/veiculos.json', { encoding: 'utf8' }))
        return veiculo
    },
    create({novoVeiculo}) {
        const data = { novoVeiculo }
        veiculo.push(data)
        fs.writeFileSync('../data/veiculos.json', JSON.stringify(veiculos), { encoding: 'utf8' })
    }
}

router.get('/', (req, res) => {
    console.log(control.read())
})
router.get('/:id', (req, res) => {
    const dados = control.read()
    const id = req.params.id
    for (i = 0; i <= dados.length; i++){
        if (dados[i].id == id) {
            return dados[i]
        } else {
            return msg('Veículo não encontrado')
        }
    }
})
router.post('/', (req, res) => {
    const dados = control.read()
    const qtdDados = dados.length
    const novoVeiculo = new veiculos()
    novoVeiculo.id = dados[qtdDados].id + 1
    novoVeiculo.placa = req.body.placa
    novoVeiculo.chassi = req.body.chassi
    novoVeiculo.renavam = req.body.renavam
    novoVeiculo.modelo = req.body.modelo
    novoVeiculo.marca = req.body.marca
    novoVeiculo.ano = req.body.ano
    control.create(novoVeiculo)
})
router.put('/:id', (req, res) => {
    
})
router.delete('/:id', (req, res) => {
    res = control.create
})