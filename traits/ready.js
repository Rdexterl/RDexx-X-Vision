
const chalk = require('chalk');
const rpc = require("discordrpcgenerator");
const config = require(".././config.json")
module.exports = (client) => {

rpc.getRpcImage(config.applicationid, config.imagename).then(large => {

      
          let presence = new rpc.Rpc()
             .setName(config.name)
              .setUrl('https://www.twitch.tv/rdexter')
              .setType("STREAMING")
              .setApplicationId(config.applicationid)
            
              
             .setState(config.state)
           
             .setDetails(config.details)
              .setAssetsLargeImage(large.id)
       
         
              .setStartTimestamp(Date.now())
              
       
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
    
})

console.log(chalk.hex("#0000ff")("Succesfully enabled #Rdexx"))
}

//SC PREMIUM
//.setType()
//ISI SESUAI KEINGINAN KAMU, CONTOH :
//.setType("PLAYING")
//bisa juga WATCHING, LISTENING dan STREAMING ❤️


