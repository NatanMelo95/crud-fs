const fs = require('fs')

const db = () => {
    const read = fs.readFileSync('veiculos.json', { encoding: 'utf8' })
    const write = fs.writeFileSync('veiculos.json', JSON.stringify(veiculos), { encoding: 'utf8' })
}
module.exports = db