const { Command } = require('klasa')

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      runIn: ['text'],
      description: language => language.get('COMMAND_TRAIN_DESCRIPTION'),
    })
  }

  run(message) {
    return message.send('[object Object]')
  }
}
