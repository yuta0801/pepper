const { Command } = require('klasa')

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      permissionLevel: 9,
      guarded: true,
      description: language => language.get('COMMAND_SHUTDOWN_DESCRIPTION'),
    })
  }

  async run(message) {
    await message.sendLocale('COMMAND_SHUTDOWN').catch(err => this.client.emit('error', err))
    await Promise.all(this.client.providers.map(provider => provider.shutdown()))
    process.exit()
  }

}
