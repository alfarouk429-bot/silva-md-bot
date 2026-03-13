const config = require('../config');

module.exports = {
    commands: ['off', 'on'],
    isOwner: true,
    exec: async (sock, jid, m, args, { command }) => {
        if (command === 'off') {
            config.MODE = 'private'; 
            await sock.sendMessage(jid, { text: '⚠️ تم تحويل البوت إلى الوضع الخاص (OFF) بنجاح.' }, { quoted: m });
        }
        
        if (command === 'on') {
            config.MODE = 'public';
            await sock.sendMessage(jid, { text: '✅ تم تشغيل البوت للجميع (ON) بنجاح.' }, { quoted: m });
        }
    }
};
