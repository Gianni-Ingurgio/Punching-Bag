# Punching Bag
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square)](https://github.com/Gianni-Ingurgio/Punching-Bag/graphs/commit-activity) [![Issues](https://img.shields.io/github/issues/Gianni-Ingurgio/Punching-Bag?style=flat-square)](https://github.com/Gianni-Ingurgio/Punching-Bag/issues) [![HitCount](http://hits.dwyl.com/Gianni-Ingurgio/Punching-Bag.svg)](http://hits.dwyl.com/Gianni-Ingurgio/Punching-Bag) [![License: MIT](https://img.shields.io/badge/License-MIT-A31F34.svg?style=flat-square)](./LICENSE.md) [![Discord.js](https://img.shields.io/badge/-Discord.js-7289da?logo=discord&logoColor=white&style=flat-square)](https://discord.js.org/) [![Discord](https://discordapp.com/api/guilds/686681540062740490/widget.png)](https://discord.gg/mHZ3Txf)

## Usage
1. The user will use the prefix to set a name. eg: `Bag! Hello World`
2. The bot will set its name
3. If enabled, the bot will clear its nickname after a set time

## Installation
1. Clone or download wherever you want it
2. Install dependencies with `npm i`
3. Set variables
4. Run with `node .`

## Variables
Create a variables.json file using variables.json.template
- Prefix must be lowercase
  - This allows it to be case insensitive for users
- Reset section allows you to toggle and set a time to clear the nickname
- Token is your bot token
  1. Go to the [Discord developer portal]()
  2. Create a new application with the ![New Application](https://img.shields.io/badge/-New%20Application-7289da) button in the top right
  3. Give it a name
  4. Click on your new application and go to the Bot tab
  5. Copy the token shown under the username
  6. Feel free to set whatever picture and username you want

```json
{
  "prefix" : "bag!",
  "reset"  : {
    "toggle" : true,
    "ms" : 60000
    },
  "token"  : "secret",
}
```
