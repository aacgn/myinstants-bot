import { MessageProcessor, DiscordBot, BotCommand, Message} from "qdbb";

export default class MyInstantsMessageProcessor extends MessageProcessor {

    public constructor(private bot: DiscordBot) {
        super();
    }

    process(message: Message): { trigger: string; args: string[]; } {

        const messageContent = message.content;

        let splittedMessage = messageContent.split(' ');

        let trigger : string = "";
        let args : string[] = [];

        if(splittedMessage[0] == '!myinstants'){
            trigger = splittedMessage[1];
            args = splittedMessage.splice(2, splittedMessage.length);
        }

        return { trigger: trigger, args: args }

    }    
    
    findCommand(trigger: string): BotCommand | null {
        return this.bot.findCommand(trigger);
    }
    
}