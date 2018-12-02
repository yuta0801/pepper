const { Command, Timestamp } = require('klasa')

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      description: language => language.get('COMMAND_TIME_DESCRIPTION'),
    })
  }

  run(message) {
    const time = Timestamp.displayArbitrary('YYYY年MM月DD日HH時mm分')
    return message.sendLocale('COMMAND_TIME', [time])
  }
}
