const randomPuppy = require('./util/random-puppy-custom');

exports.run = (client, message, args) => {
  let subreddit = args[0];

  console.log('Attempt to get subreddit', subreddit);

  if (!subreddit) {
    message.channel.send('Ну сабреддит-то выбери!');
    return;
  }

  randomPuppy(subreddit).then(
    url => {
      console.log('Result of call to reddit: url', url);
      if (!url) {
        message.channel.send('Нет такого сабреддита, дурашка!');
        return;
      }

      message.channel.send(url);
    }
  );
};
