const { Command } = require('klasa')

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      description: language => language.get('COMMAND_RIP_DESCRIPTION'),
    })
  }

  run(message) {
    return message.send({
      files: [{
        attachment: 'https://cdn.discordapp.com/attachments/514100798905516041/518271575162617858/rip.png',
      }],
    })
  }
}
