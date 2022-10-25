const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['5514997239463']
global.ownernomer = "5514997239463"
global.premium = ['5514997239463']
global.packname = 'by'
global.author = '@vinihenri_014'
global.sessionName = 'vini'
global.prefa = ['.']
global.sp = ''
global.mess = {
	pesquisa: '*Digite o texto da pesquisa!*',
	texto: '*Cade o texto?*',
    success: '*Feito com sucesso*',
    admin: '*Recursos so para administrador do grupo!*',
    botAdmin: '*Preciso cargo administrador!*',
    premime: '*Premium para registrar .aluguel*',
    owner: '*Somento meu dono*',
    group: '*Recursos apenas para grupos!*',
    private: '*Recursos apenas para bate-papo privado!*',
    bot: '*Recursos especiais do usuário do número do bot*',
    wait: 'Carregando...',
    endLimit: '*Seu limite diário expirou, o limite será redefinido a cada 12 horas*',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./lib/venus.png')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
