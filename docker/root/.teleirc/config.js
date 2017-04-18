var config = {};
module.exports = config;

/////////////////////
//  General config //
/////////////////////

// paste the bot API token you got from BotFather here:
config.tgToken = '168134735:AAFfvha9PsD0KHegCO9qBd8XF2hqHMEspWI';

// send IRC topic changes to Telegram
config.sendTopic = true;

// enable HTTP server which hosts sent media files, links to files are
// forwarded to IRC
config.showMedia = true;

// HTTP server port
config.httpPort = 9091;

// HTTP server location, URLs are generated from this
config.httpLocation = 'http://chat.flipdot.org/';

//////////////////
//  IRC config  //
//////////////////

// formatting of Telegram usernames on IRC.
// the following placeholders are available:
//
// - %firstName% (first name of sender)
// - %lastName% (last name of sender)
// - %username% (optional Telegram username of sender)
config.nameFormat = '%username%';

// fallback format string for %username% if sender lacks username
config.usernameFallbackFormat = '%firstName% %lastName%';
//config.usernameFallbackFormat = 'datenschutzderhurensohn';

config.ircNick = 'teleflip';
config.ircServer = 'irc.freenode.net';

// array of commands to send to IRC server as soon as we're connected,
// example: config.ircPerformCmds = [
//     'PRIVMSG Q@CServe.quakenet.org :AUTH <username> <password>'
// ]
config.ircPerformCmds = [];

config.channels = [
    {
        ircChan: '#flipdot',
        tgGroup: 'flipdot'
    },
];

// see https://node-irc.readthedocs.org/en/latest/API.html#client for
// documentation
config.ircOptions = {
    userName: 'bot',
    realName: 'Telegram IRC Bot',
    port: 6667,
    localAddress: null,
    debug: false,
    showErrors: false,
    autoRejoin: false,
    autoConnect: true,
    channels: [], // auto generated, do not touch
    secure: false,
    selfSigned: false,
    certExpired: false,
    floodProtection: true,
    floodProtectionDelay: 1000,
    sasl: false,
    stripColors: false,
    channelPrefixes: '&#!',
    messageSplit: 512,
    encoding: 'utf-8'
};

// if you wish to relay every irc message to telegram, set this to true.
// if false, then only lines matching config.hlRegexp will be relayed
config.ircRelayAll = false;

// the default hilight regexp will match lines containing the bot nick, or
// lines starting with '! '
// var regex = '^ *(?:' + config.ircNick + '[:,]?|!) +(.*\\S.*)$';
var regex = '^([^!].*\\S.*)';
config.hlRegexp = new RegExp(regex, 'i');
