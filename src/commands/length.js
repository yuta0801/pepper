const { Command } = require('klasa')

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      usage: '[content:str]',
      promptTime: 10000,
      description: language => language.get('COMMAND_LENGTH_DESCRIPTION'),
    })
  }

  async run(message) {
    const response = await message.prompt('何か入力してください', 10000)
    return message.sendLocale('COMMAND_LENGTH', [response.content.length])
  }
}
