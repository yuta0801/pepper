const { Command } = require('klasa')

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      description: language => language.get('COMMAND_おはよう_DESCRIPTION'),
    })
  }

  run(message) {
    const hour = new Date().getHours()
    if (hour < 11) {
      message.send('おはようございます。早いですね！')
    } else if (hour < 12) { // 11?～12
      message.send(`起きるのおせーんだよ！もう${hour}時ですよ！`)
    } else if (hour < 22) { // 13～21,22
      message.send(`もう午後ですよ？もう${hour}時です。ひどいです。`)
    }

    // 11 起きるのおせーんだよ！もう11時ですよ！
    // 12 起きるのおせーんだよ！もう12時ですよ！
    // 13 もう午後ですよ？もう13時です。ひどいです。
    // 14 もう午後ですよ？もう14時です。ひどいです。
    // 15 もう午後ですよ？もう15時です。ひどいです。
    // 16 もう午後ですよ？もう16時です。ひどいです。
    // 17 もう午後ですよ？もう17時です。ひどいです。
    // 20 もう午後ですよ？もう20時です。ひどいです。
    // 21 もう午後ですよ？もう21時です。ひどいです。
    // 23 呆れました。もう言うことないです。だって23時ですよ？？

  }
}
