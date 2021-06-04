const { MessageEmbed } = require('discord.js');
const paylak_gifs = [
 'https://media.tenor.com/images/20a4c31f195e82d9a299589275c9da68/tenor.gif',
 'https://thumbs.gfycat.com/BlackPaltryAsianelephant-size_restricted.gif',
 'https://media.tenor.com/images/1e15299e0a7fc8fd18293b405e116a66/tenor.gif',
 'https://sohanews.sohacdn.com/2019/3/31/photo-1-1554023793232907391767.gif',
 'https://ss-images.saostar.vn/2019/06/24/5475003/ezgif-com-resize-5.gif',
 'https://media.phapluatplus.vn/files/dinhquyet/2019/04/05/vua-lai-xe-vua-tha-tay-mua-quat-2-thanh-nien-nhan-cai-ket-dang-hinh-6-0701.gif',
 'https://genk.mediacdn.vn/2019/4/6/photo-1-15545195176011830860639.gif',
 'https://kenh14cdn.com/zoom/320_200/2019/4/3/apr-03-2019-17-56-18-15542889940071528873876-crop-1554289732401964429881.gif',
 'https://c.tenor.com/E4Kl8OFXS0EAAAAM/toan-bay-lac-happy.gif',
 'https://c.tenor.com/flA_Bs_Y76EAAAAM/bomman-mua-quat.gif',
 'https://c.tenor.com/8KbPco2D2ikAAAAM/dan-choi-mua-quat-sing.gif',
 'https://c.tenor.com/yB4iRPgLYLsAAAAM/%C4%91inh-quang-ngh%C4%A9a-m%C3%BAa.gif',
 'https://c.tenor.com/k_4vNb8Wz_QAAAAM/m%C3%BAa-qu%E1%BA%A1t-kh%C3%A1b%E1%BA%A3nh.gif',
 'https://genk.mediacdn.vn/2019/4/6/photo-1-1554519528595364214267.gif',
 'https://thumbs.gfycat.com/LimitedWickedAmethystinepython-size_restricted.gif',
]
module.exports = {
    config: {
        name: 'paylak',
        aliases: ['baylac']
    },
  run: async (client, message, args) => {
    
    let target = message.mentions.members.first()
    
    if (!target) return message.reply(`Bạn cần phải chọn người để pay lak cùng!`)
    
    const paylak_gif = paylak_gifs[Math.floor(Math.random() * paylak_gifs.length)];
    
    let embed = new MessageEmbed()
    .setImage(paylak_gif)
    .setColor("RANDOM")
    .setAuthor(`${message.author.username} đang pay lak cùng ${target.user.username} !`)
    .setTimestamp()
    message.channel.send(embed);
  }
};
