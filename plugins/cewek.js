let handler = async (m, { conn }) => {

  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/cewe?APIKEY=4a8b9aba75823076', '', '© shiraori', m)
}
handler.help = ['cewek']
handler.tags = ['random']
handler.command = /^(cewek)$/i

handler.limit = true


module.exports = handler
