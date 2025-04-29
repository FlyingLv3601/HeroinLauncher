const RPC = require("discord-rpc");

const client_id = "1361690066967334974";

RPC.register(client_id); 

const rpc = new RPC.Client({ transport: 'ipc' });

function discordRPC(detail, state) {
    console.log('Rich Presence активен!');

    rpc.login({ clientId: client_id }).then(() => { 
        rpc.setActivity({
            details: detail,
            state: state,
            startTimestamp: new Date(),
            largeImageKey: 'icon',
            largeImageText: 'Launcher by lv3601 >.<',
            instance: false,
        });
    }).catch(console.error);
}

module.exports = { discordRPC };
