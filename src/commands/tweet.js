const { Command } = require('klasa')

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      runIn: ['text'],
      description: language => language.get('COMMAND_TRAIN_DESCRIPTION'),
    })
  }

  run(message) {
    return message.sendCode('', [
      '403 Forbidden',
      'You don’t have permission to access Tweet on this server.',
    ].join('\n'))
  }
}
