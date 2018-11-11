# MyInstants bot

Play a specific or a random meme sound from MyInstans in your Discord server right now.

## Getting Started

These instructions were developed from an environment installation and execution of your Bot.

### Prerequisites

#### Git
In order for clone the repository it is necessary to have installed [git] (https://git-scm.com/) on your machine.

Installing on Linux (Ubuntu):
```
sudo apt-get install git
```
#### Node.js
In order for ibiatilize the code it is necessary to have installed [Node.js] (https://nodejs.org/en/) on your machine.

Installing on Linux (Ubuntu):
```
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
sudo apt install nodejs
```
#### FFmpeg
In order for the bot to be able to play on the voice channels of the disc it is necessary to have [FFmpeg] (https://www.ffmpeg.org/) installed on your machine.

Installing on Linux (Ubuntu):
```
sudo apt-get install ffmpeg
```

### Installing

#### Clonning MyInstants bot

Once you have all the prerequisites installed, let's go to the first step of all Github repository: Clone and extract the repository.

```
git clone https://github.com/aacgn/myinstants-bot.git
unzip myinstans-bot.zip
```

#### Installing dependencies

In this step, we will install all the necessary needs for the initiation of the project.

```
cd myinstans-bot
npm install
```

#### Starting MyInstants bot

Finally, initialize the bot:
```
npm start
```

The expect result is this:
```
> myinstants-bot-v2@1.0.0 start /home/antonio/Documentos/myinstants-bot-v2
> tsc --lib "es6" && node dist/index.js

[Sun, 11 Nov 2018 03:09:11 GMT | info]     [ ADDED ] Added 'play' command in commands list.
[Sun, 11 Nov 2018 03:09:11 GMT | info]     [ ADDED ] Added 'random' command in commands list.
[Sun, 11 Nov 2018 03:09:11 GMT | info]     [ ADDED ] Added 'help' command in commands list.
[Sun, 11 Nov 2018 03:09:12 GMT | info]     Started successfully with 3 command(s) loaded and 0 skipped.
```

## Built With

* [npm](https://www.npmjs.com/) - Package manager
* [qdbb](https://www.npmjs.com/package/qdbb/) - The Discord bot framework used


## Authors

* **Antonio Neto** - *Initial work* - [aacgn](https://github.com/aacgn)
