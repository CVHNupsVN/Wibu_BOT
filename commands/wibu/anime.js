const { MessageEmbed } = require('discord.js');
const malScraper = require('mal-scraper');

module.exports = {
    config: {
        name: 'anime',
        aliases: []
    },
  run: async (bot, message, args, client) => {
    const search = `${args}`;
    if (!search)
      return message.reply('Bạn quên cho tên anime vào à ?');
      
    malScraper.getInfoFromName(search)
      .then((data) => {
        const embed = new MessageEmbed()
          .setAuthor(`Kết quả trả về từ My Anime List của ${args}`.split(',').join(' '))
          .setThumbnail(data.picture)
          .setColor('RANDOM')
          .addField('Thể loại:', `\`${data.genres}\``, true)
          .addField('Tiêu đề tiếng Anh:', `\`${data.englishTitle}\``, true)
          .addField('Tiêu đề tiếng Nhật:', `\`${data.japaneseTitle}\``, true)
          .addField('Thể loại:', `\`${data.type}\``, true)
          .addField('Số tập:', `\`${data.episodes}\``, true)
          .addField('Đánh giá:', `\`${data.rating}\``, true)
          .addField('Đã phát sóng vào:', `\`${data.aired}\``, true)
          .addField('Điểm số:', `\`${data.score}\``, true)
          .addField('Rank:', `\`${data.ranked}\``, true)
          .addField('Thời lượng:', `\`${data.duration}\``, true)
          .addField('Studios:', `\`${data.studios}\``, true)
          .addField('Độ phổ biến:', `\`${data.popularity}\``, true)
          .addField('Trạng thái:', `\`${data.status}\``, true)
          .setTimestamp()
          .setFooter(`Yêu cầu bởi: ${message.author.tag}`,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed);

      })
  }
};
