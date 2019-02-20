const randomPuppy = require('random-puppy');
//const got = require('got');
//const uniqueRandomArray = require('unique-random-array');
//const EventEmitter = require('eventemitter3');

exports.run = (client, message, args) => {
    let subreddit = args[0];

    if(!subreddit){
        message.channel.send("Ну сабреддит-то выбери!");
        return;
    }
    else{
randomPuppy(subreddit)
.then(url => {
    console.log(url);
    if(!url){
            message.channel.send("Нет такого сабреддита, дурашка!");
            delete require.cache[require.resolve(`./sub.js`)];
    // We also need to delete and reload the command from the client.commands Enmap
    client.commands.delete(subreddit);
    const props = require(`./sub.js`);
    client.commands.set(subreddit, props);
            return;
            }
    else{
    message.channel.send(url) 	
    return;
    }
              })
    }   
return;
}
