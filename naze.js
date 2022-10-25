
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, MessageType, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const canvas = require('discord-canvas')
const yts = require('yt-search')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { mediafireDl } = require('./lib/mediafire.js')
const { T } = require('human-readable')
const hariini = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
const barat = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
const tengah = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
const timur = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
const nyoutube = ('[© Vini Dev</>]\n[Youtube]/[Sc] :\nhttps://youtube.com/c/VINIMODSYT')  //ubah di config biar ngk emror
const ini_mark = `0@s.whatsapp.net`

//TIME
function setar_dia_noite() {
    const time = moment.tz('America/Sao_Paulo').format('HH')
    let res = "👋 *BEMVINDO(A) | WELCOME* 👋"
    if (time >= 4) {
      res = "🌇 *Bom Dia | Good Morning* ⛅"
    }
    if (time >= 11) {
      res = "🏙️ *Boa Tarde | Good Afternoon* 🌤️"
    }
    if (time >= 15) {
      res = "🌆 *Boa Tarde | Good Afternoon* 🌥️"
    }
    if (time >= 17) {
      res = "🌃 *Boa Noite | Good Evening* 💫"
    }
    return res
  }

let vote = db.data.others.vote = []



module.exports = naze = async (naze, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await naze.decodeJid(naze.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
	
        // Group
        const groupMetadata = m.isGroup ? await naze.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

        naze.getName = (jid, withoutContact  = false) => {
            id = naze.decodeJid(jid)
            withoutContact = naze.withoutContact || withoutContact 
            let v
            if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
                v = store.contacts[id] || {}
                if (!(v.name || v.subject)) v = naze.groupMetadata(id) || {}
                resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
            })
            else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === naze.decodeJid(naze.user.id) ?
                naze.user :
                (store.contacts[id] || {})
                return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
        }

        naze.ev.on('group-participants.update',async (event) => {
            const _welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
            const isWelcome = _welcome.includes(event.chat)
            const gcChat = await naze.getChatById(event.chat)
            const pcChat = await naze.getContact(event.who)
            let { pushname, verifiedName, formattedName } = pcChat
            pushname = pushname || verifiedName || formattedName
            const { name, groupMetadata } = gcChat
            const botNumbers = await naze.getHostNumber() + '@c.us'
            try {
                if (event.action === 'add' && event.who !== botNumbers && isWelcome) {
                    const pic = await naze.getProfilePicFromServer(event.who)
                    if (pic === `ERROR: 401` || pic === 'ERROR: 404') {
                        var picx = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    } else {
                        picx = pic
                    }
                    const welcomer = await new canvas.Welcome()
                        .setUsername(pushname)
                        .setDiscriminator(event.who.substring(6, 10))
                        .setMemberCount(groupMetadata.participants.length)
                        .setGuildName(name)
                        .setAvatar(picx)
                        .setColor('border', '#00100C')
                        .setColor('username-box', '#00100C')
                        .setColor('discriminator-box', '#00100C')
                        .setColor('message-box', '#00100C')
                        .setColor('title', '#00FFFF')
                        .setBackground('https://www.photohdx.com/images/2016/05/red-blurry-background.jpg')
                        .toAttachment()
                    const base64 = `data:image/png;base64,${welcomer.toBuffer().toString('base64')}`
                    await naze.sendFile(event.chat, base64, 'welcome.png', `Welcome ${pushname}!`)
                } else if (event.action === 'kick' && event.who !== botNumbers && isWelcome) {
                    const pic = await naze.getProfilePicFromServer(event.who)
                    if (pic === `ERROR: 401` || pic === 'ERROR: 404') {
                        var picxs = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    } else {
                        picxs = pic
                    }
                    const bye = await new canvas.Goodbye()
                        .setUsername(pushname)
                        .setDiscriminator(event.who.substring(6, 10))
                        .setMemberCount(groupMetadata.participants.length)
                        .setGuildName(name)
                        .setAvatar(picxs)
                        .setColor('border', '#00100C')
                        .setColor('username-box', '#00100C')
                        .setColor('discriminator-box', '#00100C')
                        .setColor('message-box', '#00100C')
                        .setColor('title', '#00FFFF')
                        .setBackground('https://www.photohdx.com/images/2016/05/red-blurry-background.jpg')
                        .toAttachment()
                    const base64 = `data:image/png;base64,${bye.toBuffer().toString('base64')}`
                    await naze.sendFile(event.chat, base64, 'welcome.png', `Bye ${pushname}, we will miss you~`)
                }
            } catch (err) {
                console.error(err)
            }
        })


        const downloadMediaMessage = async (message) => {
            let mime = (message.msg || message).mimetype || ''
            let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
            }
                    
            return buffer
            } 
            
            try {
            ppimg = await ayu.profilePictureUrl(sender)
            } catch {
            ppimg = 'https://telegra.ph/file/60b4caf561c9585eb8dd0.jpg'
            }
            const userppbuff = await getBuffer(ppimg) 
            
            const idb = sender.split("@")[0]




	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
      /*  naze.ev.on('group-participants.update', async (anu) => {
            console.log(anu)
            try {
                let metadata = await naze.groupMetadata(anu.id)
                let participants = anu.participants
                for (let num of participants) {
                    // Get Profile Picture User
                    try {
                    var ppuser = await naze.profilePictureUrl(num, 'image')
                    } catch {
                    var ppuser = 'https://telegra.ph/file/a7413924dc2b7e793d310.jpg'
                    }
    
                    // Get Profile Picture Group
                    try {
                     var ppgroup = await naze.profilePictureUrl(anu.id, 'image')
                    } catch {
                     var ppgroup = 'https://telegra.ph/file/a7413924dc2b7e793d310.jpg'
                    }
                         
                         const pushname = m.pushName || "No Name"
                         const util = require('util')
                         let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
    let ownernya = ownernomer + '@s.whatsapp.net'
    let me = m.sender
    let ments = [ownernya, me, ini_mark]
    let buff = await getBuffer(ppuser)
    let bufff = await getBuffer(ppgroup)
ran = getRandom('.jpg')
await fs.writeFileSync(ran, buff)
await fs.writeFileSync(ran, bufff)
let upp = await TelegraPh(ran)

ini_img = await getBuffer(`https://tohka.tech/api/canvas/welcome?nome=${pushname}&nomegp=${metadata.subject}&titulo=BEM%20VINDO&membros=&cor=0025ff&tcor=0025ff&lcor=0025ff&perfil=${util.format(upp)}&fundo=https://telegra.ph/file/c2c997fc842a6f49ec576.jpg&numero=${num.split("@")[0]}&apikey=ayubot155`)
ini_img1 = (`https://tohka.tech/api/canvas/welcome?nome=${pushname}&nomegp=ok&titulo=BEM%20VINDO&membros=&cor=0025ff&tcor=0025ff&lcor=0025ff&perfil=${util.format(upp)}&fundo=https://telegra.ph/file/c2c997fc842a6f49ec576.jpg&numero=${num.split("@")[0]}&apikey=igbot`)

    if (anu.action == 'add') {
        naze.sendMessage(anu.id, { image: { url: getBuffer(ini_img1) }}, )
                    } else if (anu.action == 'remove') {
                        naze.sendMessage(anu.id, { image: { url: ini_img1 }}, )
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }) */

        // Public & Self
        if (!naze.public) {
            if (!m.key.fromMe) return
        }

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limite redefinido')
        }, {
            scheduled: true,
            timezone: "America/Sao_Paulo"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await naze.setStatus(`${naze.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
    

	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`┏━━━━━━━\n┃   𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺\n┃ 𝙻𝙸𝙽𝙺 𝙳𝙴𝚃𝙴𝙲𝚃\n┃  𝚅𝙾𝙲𝙴 𝚂𝙴𝚁𝙰́\n┃ 𝚁𝙴𝙼𝙾𝚅𝙸𝙳𝙾 !!!\n┗━━━━━━━`)
        if (!isBotAdmins) return m.reply(`*Me de cargo admin para banir*`)
        let gclink = (`https://chat.whatsapp.com/`+await naze.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`*desculpe, não aconteceu, porque você enviou o link para este grupo*`)
        if (isAdmins) return m.reply(`*desculpe você administrador*`)
        if (isCreator) return m.reply(`*desculpe você é o dono do meu bot*`)
        naze.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: naze.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, naze.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        naze.ev.emit('messages.upsert', msg)
        }
	    
        switch(command) {

	    case 'doaçao': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                naze.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/72902a5d5412c52fa3983.jpg' }, caption: `*OLA* ${m.pushName}*\n*PIX* *:* *henriquevinicius511@gmail.com*` }, { quoted: m })
            }
            break
            case 'sc': {
                m.reply('https://wa.me/5514997249463')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw '┏━━━━━━━\n┃ 𝙲𝙷𝙰𝚃 𝙾𝙿𝙲𝙰𝙾\n┃ *1* *𝙼𝚄𝚃𝙴*\n┃ *2* *𝚄𝙽𝙼𝚄𝚃𝙴*\n┃ *3* *𝙰𝚁𝙲𝙷𝙸𝚅𝙴*\n┃ *4* *𝚄𝙽𝙰𝚁𝙲𝙷𝙸𝚅𝙴*\n┃ *5* *𝚁𝙴𝙰𝙳*\n┃ *6* *𝚄𝙽𝚁𝙴𝙰𝙳*\n┃ *7* *𝙳𝙴𝙻𝙴𝚃𝙴*\n┗━━━━━━━'
                if (args[0] === 'mute') {
                    naze.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    naze.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    naze.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    naze.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    naze.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    naze.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    naze.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
//Pembatas
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                naze.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'entrar': {
                if (!isCreator) throw mess.owner
                if (!text) throw '*Digitar/Cola Link do Grupo!!!*'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw '*Link Invalido!*'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await naze.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'sair': {
                if (!isCreator) throw mess.owner
                m.reply('*FOI BOM FICAR AKI ADEUS*')
                await naze.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setinfost': {
               if (!isCreator) throw mess.owner
               if (!text) throw `*Exemplo:* ${prefa + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`┏━━━━━━━\n┃ *𝙸𝙽𝙵𝙾 𝚂𝚃𝙸𝙲𝙺𝙴𝚁*\n┃ *𝙰𝙻𝚃𝙴𝚁𝙰𝙳𝙾 ✅*\n┃ *${global.packname}*\n┃ *${global.author}*\n┗━━━━━━━`)
            }
            break
	case 'banir': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await naze.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'adicionar': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await naze.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promover': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await naze.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'rebaixar': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await naze.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'ban': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await naze.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unban': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await naze.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw mess.texto
                await naze.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw mess.texto
                await naze.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `*Enviar/Responder imagem com legenda ${prefa + command}*`
                if (!/image/.test(mime)) throw `*Enviar/Responder imagem com legenda ${prefa + command}*`
                if (/webp/.test(mime)) throw `*Enviar/Responder imagem com legenda ${prefa + command}*`
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                await naze.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgrupo': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `*Enviar/Responder imagem com legenda ${prefa + command}*`
                if (!/image/.test(mime)) throw `*Enviar/Responder imagem com legenda ${prefa + command}*`
                if (/webp/.test(mime)) throw `*Enviar/Responder imagem com legenda ${prefa + command}*`
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                await naze.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            naze.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw mess.pesquisa
                let anu = await styletext(text)
                let teks = `*Texto de ${text}*\n\n`
                for (let i of anu) {
                    teks += `*${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
            
               case 'grupo': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await naze.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Grupo fechado com sucesso*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await naze.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Grupo aberto com sucesso*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'grupo open', buttonText: { displayText: '*𝙰𝙱𝚁𝙸𝚁 𝙶𝚁𝚄𝙿𝙾*' }, type: 1 },
                        { buttonId: 'grupo close', buttonText: { displayText: '*𝙵𝙴𝙲𝙷𝙰𝚁 𝙶𝚁𝚄𝙿𝙾*' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, `*𝙼𝙾𝙳𝙾 𝙳𝙾 𝙶𝚁𝚄𝙿𝙾*`, naze.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await naze.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Todos membros pode trocar Informações do grupo*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await naze.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Somente admins pode trocar as informações do grupo*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: '*𝙸𝙽𝙵𝙾 𝙰𝙱𝚁𝙸𝚁*' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: '*𝙸𝙽𝙵𝙾 𝙵𝙴𝙲𝙷𝙰𝚁*' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, `*𝙴𝙳𝙸𝙲𝙰𝙾 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾*`, naze.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`*𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺 𝙹𝙰 𝙴𝚂𝚃𝙰 𝙰𝚃𝙸𝚅𝙾!!!*`)
                db.data.chats[m.chat].antilink = true
                m.reply(`*𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺 𝙰𝚃𝙸𝚅𝙰𝙳𝙾!!!*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`*𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺 𝙹𝙰 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾!!!*`)
                db.data.chats[m.chat].antilink = false
                m.reply(`*𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾!!!*`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: '*𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝙾𝙽*' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: '*𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝙾𝙵𝙵*' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, `*𝙼𝙾𝙳𝙾 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝙶𝚁𝚄𝙿𝙾*`, nyoutube, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`*𝙼𝚄𝚃𝙴 𝙹𝙰 𝙴𝚂𝚃𝙰 𝙰𝚃𝙸𝚅𝙰𝙳𝙾!!!*`)
                db.data.chats[m.chat].mute = true
                m.reply(`*${naze.user.name} 𝙴𝚂𝚃𝙰 𝙰𝚃𝙸𝚅𝙰𝙳𝙾!!!*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`*𝙼𝚄𝚃𝙴 𝙹𝙰 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾!!!*`)
                db.data.chats[m.chat].mute = false
                m.reply(`*${naze.user.name} 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾!!!*`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: '*𝙼𝚄𝚃𝙴 𝙾𝙽*' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: '*𝙼𝚄𝚃𝙴 𝙾𝙵𝙵*' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, `*𝚂𝙸𝙻𝙴𝙽𝙲𝙸𝙰𝙽𝙳𝙾 𝙱𝙾𝚃*`, naze.user.name, m)
                }
             }
             break
             case 'mediafire': {
            if (!text) return reply(mess.pesquisa)
            if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
            const baby1 = await mediafireDl(text)
            if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
            const result4 = `*MEDIAFIRE DOWNLOADER*\n*Name* : ${baby1[0].nama}\n*Size* : ${baby1[0].size}\n*Mime* : ${baby1[0].mime}\n*Link* : *${baby1[0].link}*`
            naze.sendText(m.chat, result4, m, { detectLink: true })
            naze.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
            }
            break
            case 'linkgrupo': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await naze.groupInviteCode(m.chat)
                naze.sendText(m.chat, `┏━━━━━━━\n┃ *𝙻𝙸𝙽𝙺 𝙳𝙾 𝙶𝚁𝚄𝙿𝙾*\n┃ *${groupMetadata.subject}*\n┃ *https://chat.whatsapp.com/${response}*\n┗━━━━━━━`, m, { detectLink: true })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw '*𝙰 𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙽𝙰𝙾 𝙵𝙾𝙸 𝙴𝙽𝚅𝙸𝙰𝙳𝙰 𝙿𝙾𝚁 𝙼𝙸𝙼 𝙳𝙴𝚂𝙲𝚄𝙻𝙿𝙴*'
                naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Cade o texto?\n*Exemplo:* *${prefa + command} *Alerta teste*`
                let getGroups = await naze.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`*Enviar transmissão para*\n*${anu.length}*\n*Bate-papo em grupo, horário conveniente*\n${anu.length * 1.5} *segundo*`)
                for (let i of anu) {
                    await sleep(1500)
                    let txt = ` *𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙳𝙴 𝚃𝚁𝙰𝙽𝚂𝙼𝙸𝚂𝚂𝙰𝙾* \n\n${text}`
                    let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '*𝙱𝙰𝙲𝙺*' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '*𝙼𝙴𝙽𝚄*' }, type: 1 },{ buttonId: 'donate', buttonText: { displayText: '*𝙳𝙾𝙰𝙲𝙰𝙾*' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, txt, nyoutube, m)
		}}
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Cade o texto?\n*Exemplo:* ${prefa + command} *Alerta teste*`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`*Enviar transmissão para*\n*${anu.length}*\n*Bate-papo\Hora de conclusão*\n${anu.length * 1.5} *segundo*`)
		for (let yoi of anu) {
		    await sleep(3000)
                      let txt = `*𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙳𝙴 𝚅𝙸𝙽𝙸 𝙳𝙴𝚅</>*\n${text}`
                      let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '*𝙱𝙰𝙲𝙺*' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '*𝙼𝙴𝙽𝚄*' }, type: 1 },{ buttonId: 'donate', buttonText: { displayText: '*𝙳𝙾𝙰𝙲𝙰𝙾*' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, txt, nyoutube, m)
		}}
            break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Responder vídeo/imagem com legenda* ${prefa + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await naze.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*10 segundos no máximo!*')
                let media = await quoted.download()
                let encmedia = await naze.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Enviar imagem/vídeo com legenda* ${prefa + command}\n*Duração do Vídeos de 1 a 9 segundos*`
                }
            }
            break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `*Exemplo* : *${prefa + command}* 😅+🤔`
		if (!emoji2) throw `*Exemplo* : *${prefa + command}* 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await naze.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `*Exemplo* : ${prefa + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await naze.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': {
           if (!text) throw `*Exemplo* : ${prefa + command} *texto?*`
           await naze.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'naze', 'morou', m, {asSticker: true})

         }
         break
         case 'ttp': case 'attp1': case 'attp2': case 'attp3': case 'attp4': case 'attp5': case 'attp6': case 'attp7': {
           if (!text) throw `*Exemplo* : ${prefa + command} *texto?*`
           await naze.sendMedia(m.chat, `https://ayu-api.cf/api/maker/${command}?texto=${text}&cor=ffffff&apikey=saladakk`, 'naze', 'morou', m, {asSticker: true})

         }
         break
            case 'toimage': case 'toimg': {
                if (!quoted) throw '*Marque o sticker que queira converter*'
                if (!/webp/.test(mime)) throw `*Marque o sticker que queira converter* *${prefa + command}*`
                m.reply(mess.wait)
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    naze.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw '*Marque o sticker que queira converter*'
                if (!/webp/.test(mime)) throw `*Marque o sticker que queira converter* *${prefa + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await naze.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converter Webp em vídeo' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Enviar/responder vídeo/áudio que você deseja usar como áudio com legenda* ${prefa + command}`
            if (!quoted) throw `*Enviar/responder vídeo/áudio que você deseja usar como áudio com legenda* ${prefa + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            naze.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `*Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda* ${prefa + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda* ${prefa + command}`
            if (!quoted) throw `*Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda* ${prefa + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            naze.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${naze.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Responda ao vídeo/áudio que você deseja ser VN com legenda* ${prefa + command}`
            if (!quoted) throw `*Responda ao vídeo/áudio que você deseja ser VN com legenda* ${prefa + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            naze.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Imagem de resposta'
                if (!/webp/.test(mime)) throw `*Marque o sticker que deseja transformar em imagem* *${prefa + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await naze.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `*Enviar/Responder imagem com legenda* ${prefa + command}`
	    if (!/image/.test(mime)) throw `*Enviar/Responder imagem com legenda* ${prefa + command}`
	    if (/webp/.test(mime)) throw `*Enviar/Responder imagem com legenda* ${prefa + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await naze.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    naze.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
        case 'google': {
                if (!text) throw `*Exemplo* : ${prefa + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks =  '┏━━━━━━━\n┃ *𝙶𝙾𝙾𝙶𝙻𝙴*\n┃ *𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂*\n┃ *${text}*\n┗━━━━━━━'
                for (let g of res) {
                teks += `*Título* : *${g.title}*\n`
                teks += `*Descrição* : *${g.snippet}*\n`
                teks += `*Link* : *${g.link}*\n`
                } 
                m.reply(teks)
                })
                }
                break
	    case 'play': case 'ytplay': {
                if (!text) throw `Exemplo : ${prefa + command}  Cade o texto?`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '*𝙰𝚄𝙳𝙸𝙾*'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '*𝚅𝙸𝙳𝙴𝙾*'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
┏━━━━━━━━━━━━
┃ *𝚃𝙸𝚃𝚄𝙻𝙾:* *${anu.title}*
┃ *𝙸𝙳 𝚈𝚃:* *${anu.videoId}*
┃ *𝙳𝚄𝚁𝙰𝙲𝙰𝙾:* *${anu.timestamp}*
┃ *𝚅𝙸𝚂𝚄𝙰𝙻𝙸𝚉𝙰𝙲𝙰𝙾:* *${anu.views}*
┃ *𝚄𝙿𝙻𝙾𝙰𝙳:* *${anu.ago}*
┃ *𝙰𝚄𝚃𝙷𝙾𝚁:* *${anu.author.name}*
┃ *𝙲𝙰𝙽𝙰𝙻:* *${anu.author.url}*
┃ *𝙳𝙴𝚂𝙲𝚁𝙸𝙲𝙰𝙾:* *${anu.description}*
┃ *𝚄𝚁𝙻 𝚈𝚃:* *${anu.url}*
┗━━━━━━━━━━━━`,
                    footer: anu.url,
                    footer: anu.description,
                    buttons: buttons,
                    headerType: 4
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `*Exemplo:* *${prefa + command}* *link?*`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('*Arquivo acima do limite*'+util.format(media))
                naze.sendImage(m.chat, media.thumb, `┏━━━━━━━━━━━━\n┃ *𝚃𝙸𝚃𝚄́𝙻𝙾:* *${media.title}*\n┃ *𝚃𝙰𝙼𝙰𝙽𝙷𝙾:* *${media.filesizeF}*\n┃ *𝚄𝚁𝙻 𝙼𝚄𝚂𝙸𝙲:* *${isUrl(text)}*\n┃ *𝚁𝙴𝚂𝙾𝙻𝚄𝙲𝙰𝙾:* *${args[1] || '128kbps'}*`, m)
                naze.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `*Exemplo:* *${prefa + command}* *Link*`
                let quality = args[1] ? args[1] : '480p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('Arquivo acima do limite '+util.format(media))
                naze.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `┏━━━━━━━━━━━━\n┃ *𝚃𝙸𝚃𝚄́𝙻𝙾:* *${media.title}*\n┃ *𝚃𝙰𝙼𝙰𝙽𝙷𝙾:* *${media.filesizeF}*\n┃ *𝚄𝚁𝙻 𝙼𝚄𝚂𝙸𝙲:* *${isUrl(text)}*\n*┃ *𝚁𝙴𝚂𝙾𝙻𝚄𝙲𝙰𝙾:* *${args[1] || '480p'}*` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                naze.sendMessage(m.chat, { image: { url: result }, caption: '┏━━━━━━━━━━━━\n┃ *𝚄𝚁𝙻 𝙸𝙼𝙰𝙶𝙴𝙼*'+result`\n┗━━━━━━━━━━━━ `}, { quoted: m })
            }
            break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                naze.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefa + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'publico': {
                if (!isCreator) throw mess.owner
                naze.public = true
                m.reply('*Bot para Uso público*')
            }
            break
            case 'private': {
                if (!isCreator) throw mess.owner
                naze.public = false
                m.reply('*Bot para uso próprio*')
            }
            break
            case 'speedtest': {
            m.reply('Teste Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                naze.sendContact(m.chat, global.owner, m)
            }
            break

            case 'simplemenu': case 'menu': case 'help': {
                
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
            let kukiw = `┏━━━━━━━━━━━━\n┃ *𝚅𝙴𝙽𝚄𝚂 𝙱𝙾𝚃*\n┃ *𝙳𝙴𝚅 𝚂𝙾𝚄𝚁𝙲𝙴* @${ownernya.split('@')[0]}\n┗━━━━━━━━━━━━`
            let sections = [
                {
                title: "*𝚅𝙴𝙽𝚄𝚂 𝙱𝙾𝚃 𝙼𝙴𝙽𝚄*",
                rows: [
                {title: "*𝙵𝚄𝙽𝙲𝚃𝙸𝙾𝙽 𝙶𝚁𝚄𝙿𝙾*", rowId: `t`, description: `👥 *𝙼𝙴𝙽𝚄 𝙶𝚁𝚄𝙿𝙾*`},
                {title: "*𝙵𝚄𝙽𝙲𝚃𝙸𝙾𝙽𝚂 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁*", rowId: `mconvert`, description: `🛠 *𝙼𝙴𝙽𝚄 𝙲𝙾𝙽𝚅𝙴𝚁𝚂𝙰𝙾*`},
                {title: "*𝙵𝚄𝙽𝙲𝚃𝙸𝙾𝙽𝚂 𝙼𝙴𝙽𝚄*", rowId: `mmain`, description: `💾 *𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻*`},
                {title: "*𝙵𝚄𝙽𝙲𝚃𝙸𝙾𝙽𝚂 𝙰𝚄𝙳𝙸𝙾/𝚅𝙸𝙳𝙴𝙾*", rowId: `mvoice`, description: `🎶 *𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾/𝚅𝙸𝙳𝙴𝙾*`},
                {title: "*𝙵𝚄𝙽𝙲𝚃𝙸𝙾𝙽𝚂 𝙳𝙾𝙽𝙾*", rowId: `mowner`, description: `👤 *𝙼𝙴𝙽𝚄 𝙳𝙾𝙽𝙾*`},
                ]
                },
                ]
                naze.sendListMsg(m.chat, kukiw, nyoutube, `*𝙾𝙻𝙰 ${pushname}*!`, `*𝙼𝙴𝙽𝚄 𝚂𝙴𝙻𝙴𝙲𝚃𝙸𝙾𝙽𝚂*`, sections, m)
}
            break
            case 't': {
                let ownernya = ownernomer + '@s.whatsapp.net'
                let me = m.sender
                let ments = [ownernya, me, ini_mark]
                try {
                    imgmn = await naze.profilePictureUrl(sender)
                     } catch {
                    imgmn = 'https://telegra.ph/file/a7413924dc2b7e793d310.jpg'
                     }
                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let buff = await getBuffer(imgmn)
ran = getRandom('.jpg')
await fs.writeFileSync(ran, buff)
let upp = await TelegraPh(ran)
                naze.sendMessage(m.chat, { image: { url: `https://tohka.tech/api/canvas/menu?nome=${pushname}&perfil=https://telegra.ph/file/a7413924dc2b7e793d310.jpg&fundo=https://telegra.ph/file/c2c997fc842a6f49ec576.jpg&cor1=0025ff&cor2=0025ff&numero=1&titulo=MENU&apikey=ayubot155` }}, m)
                fs.unlinkSync(ran)
            }
            break
            case 'mgroup': {
goup = `┏━━━━━━━━━━━━
┃ *𝙶𝚁𝚄𝙿𝙾 𝙼𝙴𝙽𝚄*
┃
┃ *${prefa}𝙻𝙸𝙽𝙺𝙶𝚁𝚄𝙿𝙾*
┃ *${prefa}𝚂𝙴𝚃𝙿𝙿𝙶𝙲 [𝙸𝙼𝙰𝙶𝙴]*
┃ *${prefa}𝚂𝙴𝚃𝙽𝙰𝙼𝙴 [𝚃𝙴𝚇𝚃𝙾]*
┃ *${prefa}𝚂𝙴𝚃𝙳𝙴𝚂𝙲 [𝚃𝙴𝚇𝚃𝙾]*
┃ *${prefa}𝙴𝙳𝙸𝚃𝙸𝙽𝙵𝙾*
┃ *${prefa}𝙰𝙳𝙸𝙲𝙸𝙾𝙽𝙰𝚁 55*
┃ *${prefa}𝙱𝙰𝙽𝙸𝚁 @𝚄𝚂𝙴𝚁*
┃ *${prefa}𝙷𝙸𝙳𝙴𝚃𝙰𝙶 [𝚃𝙴𝚇𝚃𝙾]*
┃ *${prefa}𝚃𝙰𝙶𝙰𝙻𝙻 [𝚃𝙴𝚇𝚃𝙾]*
┃ *${prefa}𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 [𝙾𝙽/𝙾𝙵𝙵]*
┃ *${prefa}𝙼𝚄𝚃𝙴 [𝙾𝙽/𝙾𝙵𝙵]*
┃ *${prefa}𝙿𝚁𝙾𝙼𝙾𝚅𝙴𝚁 @𝚄𝚂𝙴𝚁*
┃ *${prefa}𝚁𝙴𝙱𝙰𝙸𝚇𝙰𝚁 @𝚄𝚂𝙴𝚁*
┃ *${prefa}𝚅𝙾𝚃𝙴[𝚃𝙴𝚇𝚃𝙾]*
┃ *${prefa}𝙳𝙴𝚅𝙾𝚃𝙴*
┃ *${prefa}𝚄𝙿𝚅𝙾𝚃𝙴*
┃ *${prefa}𝙲𝙴𝙺𝚅𝙾𝚃𝙴*
┃ *${prefa}𝙷𝙰𝙿𝚄𝚂𝚅𝙾𝚃𝙴*
┗━━━━━━━━━━━━`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '*𝙱𝙰𝙲𝙺*' }, type: 1 },{ buttonId: 'donate', buttonText: { displayText: '𝙳𝙾𝙰𝙲𝙰𝙾' }, type: 2 }]
              await naze.sendButtonText(m.chat, buttons, goup, nyoutube, m)
            }
            break

            case 'msearch': {
sarch = `┏━━━━━━━━━━━━
┃ *𝙼𝙴𝙽𝚄 𝙿𝙴𝚂𝚀𝚄𝙸𝚂𝙰*
┃ *${prefa}𝙶𝙾𝙾𝙶𝙻𝙴 [𝚃𝙴𝚇𝚃𝙾]
┃ *${prefa}𝙿𝙸𝙽𝚃𝙴𝚁𝙴𝚂𝚃 [𝚃𝙴𝚇𝚃𝙾]
┃ *${prefa}𝚂𝙾𝚄𝙽𝙳1 𝙰𝚃𝙴 𝚂𝙾𝚄𝙽𝙳161*
┗━━━━━━━━━━━━`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, sarch, nyoutube, m)
        }
            break

            case 'mconvert': {
cnvert = `┏━━━━━━━━━━━━
┃ *𝙼𝙴𝙽𝚄 𝙲𝙾𝙽𝚅𝙴𝚁𝚂𝙾𝚁*
┃ *${prefa}𝚃𝚃𝙿*
┃ *${prefa}𝙰𝚃𝚃𝙿*
┃ *${prefa}𝙰𝚃𝚃𝙿1*
┃ *${prefa}𝙰𝚃𝚃𝙿2*
┃ *${prefa}𝙰𝚃𝚃𝙿3*
┃ *${prefa}𝙰𝚃𝚃𝙿4*
┃ *${prefa}𝙰𝚃𝚃𝙿5*
┃ *${prefa}𝙰𝚃𝚃𝙿6*
┃ *${prefa}𝙰𝚃𝚃𝙿7*
┃ *${prefa}𝚃𝙾𝙸𝙼𝙰𝙶𝙴*
┃ *${prefa}𝚁𝙴𝙼𝙾𝚅𝙴𝙱𝙶*
┃ *${prefa}𝚂𝚃𝙸𝙲𝙺𝙴𝚁*
┃ *${prefa}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇*
┃ *${prefa}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇2*
┃ *${prefa}𝚃𝙾𝚅𝙸𝙳𝙴𝙾*
┃ *${prefa}𝚃𝙾𝙶𝙸𝙵*
┃ *${prefa}𝚃𝙾𝚄𝚁𝙻*
┃ *${prefa}𝚃𝙾𝚅𝙽*
┃ *${prefa}𝚃𝙾𝙼𝙿3*
┃ *${prefa}𝚃𝙾𝙰𝚄𝙳𝙸𝙾*
┗━━━━━━━━━━━━`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '*𝙱𝙰𝙲𝙺*' }, type: 1 },{ buttonId: 'donate', buttonText: { displayText: '𝙳𝙾𝙰𝙲𝙰𝙾' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, cnvert, nyoutube, m)
            }
            break

            case 'mmain': {
min = `┏━━━━━━━━━━━━
┃ *𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻*
┃ *${prefa}𝙿𝙸𝙽𝙶*
┃ *${prefa}𝙾𝚆𝙽𝙴𝚁*
┃ *${prefa}𝙼𝙴𝙽𝚄*
┃ *${prefa}𝙳𝙴𝙻𝙴𝚃𝙴*
┃ *${prefa}𝙸𝙽𝙵𝙾𝙲𝙷𝙰𝚃*
┃ *${prefa}𝚂𝙿𝙴𝙴𝙳𝚃𝙴𝚂𝚃*
┗━━━━━━━━━━━━`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '*𝙱𝙰𝙲𝙺*' }, type: 1 },{ buttonId: 'donate', buttonText: { displayText: '𝙳𝙾𝙰𝙲𝙰𝙾' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, min, nyoutube, m)
            }
            break

case 'mvoice': {
vice = `┏━━━━━━━━━━━
┃ *𝙼𝙴𝙽𝚄 𝚅𝙾𝚉*
┃ *${prefa}𝙱𝙰𝚂𝚂*
┃ *${prefa}𝙱𝙻𝙾𝚆𝙽*
┃ *${prefa}𝙳𝙴𝙴𝙿*
┃ *${prefa}𝙴𝙰𝚁𝚁𝙰𝙿𝙴*
┃ *${prefa}𝙵𝙰𝚂𝚃*
┃ *${prefa}𝙵𝙰𝚃*
┃ *${prefa}𝙽𝙸𝙶𝚃𝙷𝙲𝙾𝚁𝙴*
┃ *${prefa}𝚁𝙴𝚅𝙴𝚁𝚂𝙴*
┃ *${prefa}𝚁𝙾𝙱𝙾𝚃*
┃ *${prefa}𝚂𝙻𝙾𝚆*
┃ *${prefa}𝚃𝚄𝙿𝙰𝙸*
┗━━━━━━━━━━━`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '*𝙱𝙰𝙲𝙺*' }, type: 1 },{ buttonId: 'donate', buttonText: { displayText: '𝙳𝙾𝙰𝙲𝙰𝙾' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, vice, nyoutube, m)
            }
            break

            case 'mowner': {
oner = `┏━━━━━━━━━━━
┃ *𝙼𝙴𝙽𝚄 𝙳𝙾𝙽𝙾*
┃ *${prefa}𝚁𝙴𝙰𝙲𝚃 [𝙴𝙼𝙾𝙹𝙸]*
┃ *${prefa}𝙲𝙷𝙰𝚃 [𝙾𝙿𝙲𝙰𝙾]*
┃ *${prefa}𝙹𝙾𝙸𝙽 [𝙻𝙸𝙽𝙺]*
┃ *${prefa}𝚂𝙰𝙸𝚁*
┃ *${prefa}𝙱𝙻𝙾𝙲𝙺 @𝚄𝚂𝙴𝚁*
┃ *${prefa}𝚄𝙽𝙱𝙻𝙾𝙲𝙺 @𝚄𝚂𝙴𝚁*
┃ *${prefa}𝙱𝙲𝙶𝚁𝚄𝙿𝙾 [𝚃𝙴𝚇𝚃𝙾]*
┃ *${prefa}𝙱𝙲𝙰𝙻𝙻 [𝚃𝙴𝚇𝚃𝙾]*
┃ *${prefa}𝚂𝙴𝚃𝙿𝙿𝙱𝙾𝚃 [𝙸𝙼𝙰𝙶𝙴]*
┗━━━━━━━━━━━`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '*𝙱𝙰𝙲𝙺' }, type: 1 },{ buttonId: 'donate', buttonText: { displayText: '𝙳𝙾𝙰𝙲𝙰𝙾' }, type: 1 }]
await naze.sendButtonText(m.chat, verificado, buttons, oner, nyoutube, m)
}
break

case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
naze_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await naze.sendMessage(m.chat, { audio: naze_dev, mimetype: 'audio/mp4',}, { quoted: m })     
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    naze.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
