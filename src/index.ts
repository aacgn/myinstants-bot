import { BotOptions, DiscordBot } from "qdbb";
import http from "http";
import fs from "fs";
import MyInstantsMessageProcessor from "./message/myinstants-message-processor";

let options: BotOptions = {
    token: process.env.BOT_TOKEN || 'BOT_TOKEN',
    commandFilePattern: 'commands/*.command.ts'
}

let bot = new DiscordBot(options);

bot.setMessageProcessor(new MyInstantsMessageProcessor(bot));

bot.addCommand({
    trigger: "play",
    description: "Run !myinstants play <ID> to execute a meme",
    onTriggered: (action, args) => {
        let playfile = fs.createWriteStream("./src/resources/media/audios/play.mp3");
        http.get(`http://api.cleanvoice.ru/myinstants/?type=file&id=${args[0]}`, (response) => {
            response.pipe(playfile);
            action.playAudio("./src/resources/media/audios/play.mp3", true);
        });
    }
});

bot.addCommand({
    trigger: "random",
    description: "Run !myinstants random to execute a random meme",
    onTriggered: (action) => {
        let randomFile = fs.createWriteStream("./src/resources/media/audios/random.mp3");
        http.get('http://api.cleanvoice.ru/myinstants/?type=file', (response) => {
            response.pipe(randomFile);
            action.playAudio("./src/resources/media/audios/random.mp3", true);
        });
    }
});

bot.addCommand({
    trigger: "help",
    description: "Run !myinstants help to list all commands available",
    onTriggered: (action) => {
        let helpString = "";
        bot.getCommands().forEach(command => {
            helpString += `!myinstants ${command.trigger} - ${command.description}\n`
        });
        helpString =  `\`\`\`\n${helpString}\n\`\`\``;
        action.sendTextReply(helpString);
    }
});

bot.start();
