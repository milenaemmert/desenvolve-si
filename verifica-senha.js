//acessar o arq. senhas-fracas.txt
const fs = require('fs')
const arquivo = fs.readFileSync('senhas-fracas.txt', 'utf-8')
//console.log(arquivo.slice(0, 45))
//console.log(typeof arquivo)
const senhasFracas = arquivo.split('\n')
//console.log(senhasFracas.slice(0, 100))

const senhaDoUsuario = 'Uenf938-*/'
//percorrer esse arq. e ver se a nossa senha é fraca ou não
if(senhasFracas.includes(senhaDoUsuario)) {
    console.log('Essa senha é muito fraca. Tente outra menos vulnerável.')
} else {
    console.log('Senha aprovada!')
}