const veiculos = require('../model/veiculos')
const bodyParser = require('body-parser')
const fs = require('fs')
const router = require('express').Router()
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = router;
let veiculo = []
const control = {
    read() {
        veiculo = JSON.parse(fs.readFileSync('src/data/veiculos.json', { encoding: 'utf8' }))
        return veiculo
    },
    write(novoVeiculo) {
        const data = novoVeiculo
        console.log(data)
        veiculo.push(data)
        fs.writeFileSync('src/data/veiculos.json', JSON.stringify(veiculo), { encoding: 'utf8' })
    },
    delete(deleteVeiculo) {
        const data = deleteVeiculo
        veiculo.pop(data)
        fs.writeFileSync("src/data/veiculos.json", JSON.stringify(veiculo), { encoding: 'utf8' })
    }
}

router.get('/veiculo', (req, res) => {
    res.json(control.read())
})
router.get('/veiculo/:id', jsonParser, (req, res) => {
    const dados = control.read()
    const paramId = req.params.id
    dados.forEach(veiculo => {
        if (veiculo.id == paramId) {
            console.log(veiculo)
            res.json(veiculo)
        } else {
            console.log('Veículo não encontrado')
        }    
    })
})
router.post('/create', jsonParser, (req, res) => {
    const dados = control.read()
    const qtdDados = dados.length
    if (req.body == undefined) {
        console.log("Erro ao cadastrar veículo")
    } else {
        const novoVeiculo = new veiculos()
        novoVeiculo.id = qtdDados + 1
        novoVeiculo.placa = req.body.placa
        novoVeiculo.chassi = req.body.chassi
        novoVeiculo.renavam = req.body.renavam
        novoVeiculo.modelo = req.body.modelo
        novoVeiculo.marca = req.body.marca
        novoVeiculo.ano = req.body.ano
        control.write(novoVeiculo)
        const msg = "Veículo cadastrado"
        res.send(msg)
    }
})
router.put('/update/:id', jsonParser, (req, res) => {
    const dados = control.read()
    const id = req.params.id
    dados.forEach(veiculo => {
        if (veiculo.id == id) {
            const novoVeiculo = new veiculos()
            novoVeiculo.id = veiculo.id
            novoVeiculo.placa = req.body.placa
            novoVeiculo.chassi = req.body.chassi
            novoVeiculo.renavam = req.body.renavam
            novoVeiculo.modelo = req.body.modelo
            novoVeiculo.marca = req.body.marca
            novoVeiculo.ano = req.body.ano
            control.delete(novoVeiculo)
            control.write(novoVeiculo)
            res.send('Veículo editado')
        } else {
            console.log('Veículo não encontrado')
        }
    })
})
router.delete('/delete/:id', jsonParser, (req, res) => {
    const dados = control.read()
    const id = req.params.id
    dados.forEach(veiculo => {
        console.log(veiculo.id)
        if (veiculo.id == id) {
            control.delete(veiculo)
            res.send('Veículo deletado')
        } else {
            console.log('Veículo não encontrado')
        }
    })
})