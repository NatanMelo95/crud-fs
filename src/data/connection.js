const fs = require('fs')

const db = () => {
    let read = fs.readFileSync('veiculos.json', { encoding: 'utf8' })
    let write = fs.writeFileSync('veiculos.json', JSON.stringify(veiculos), { encoding: 'utf8' })
}
export default db