const { Client } = require('minecraft-launcher-core');
const path = require('path');
const os = require('os'); 




const getMinecraftDir = () => {
    switch (os.platform()) {
        case 'win32':
            return path.join(process.env.APPDATA, '.minecraft');
        case 'darwin':
            return path.join(os.homedir(), 'Library', 'Application Support', 'minecraft');
        default:
            return path.join(os.homedir(), '.minecraft');
    }
};





async function minecraftLauncher(username, version) {
    const launcher = new Client();

    const options = {
        authorization: {
            access_token: '00000000-0000-0000-0000-000000000000',
            client_token: '00000000-0000-0000-0000-000000000000',
            uuid: '00000000-0000-0000-0000-000000000000',
            name: username,
            user_properties: {},
            meta: {
                type: 'offline',
            },
        },
        root: getMinecraftDir(),
        version: {
            number: version,
            type: 'release',
        },
        memory: {
            max: '4G',
            min: '1G',
        },
    };

    launcher.on('data', (data) => console.log('Лог:', data));
    launcher.on('close', (code) => console.log(`Процесс закрыт с кодом ${code}`));
    launcher.on('error', (err) => console.error('Ошибка:', err));

    try {
        const childProcess = await launcher.launch(options);
        console.log('Minecraft успешно запущен! PID:', childProcess.pid);
        return childProcess;
    } catch (err) {
        console.error('Ошибка при запуске Minecraft:', err);
        throw err;
    }
}

module.exports = { minecraftLauncher };