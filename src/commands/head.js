const { Command } = require('klasa')

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      runIn: ['text'],
      description: language => language.get('COMMAND_HEAD_DESCRIPTION'),
    })
  }

  run(message) {
    return message.send({
      files: [{
        attachment: message.guild.members.random().user.avatarURL(),
      }],
    })
  }
}
