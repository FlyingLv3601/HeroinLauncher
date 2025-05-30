const { Client } = require('minecraft-launcher-core');
const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const os = require('os');

const launcher = new Client();



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





async function fetchFabricLoaderVersion(mcVersion) {
  const { data } = await axios.get(`https://meta.fabricmc.net/v2/versions/loader/${mcVersion}`);
  return {
    loader: data[0].loader.version,
    fabricVersionId: `fabric-loader-${mcVersion}-${data[0].loader.version}`
  };
}

async function installFabric(mcVersion, fabricVersionId) {
  const versionDir = path.join(getMinecraftDir(), 'versions', fabricVersionId);
  const { data } = await axios.get(`https://meta.fabricmc.net/v2/versions/loader/${mcVersion}/${fabricVersionId.split('-').pop()}/profile/json`);
  await fs.ensureDir(versionDir);
  await fs.writeJson(path.join(versionDir, `${fabricVersionId}.json`), data);
}

async function launchMinecraftFabric(username, mcVersion) {
  const { loader, fabricVersionId } = await fetchFabricLoaderVersion(mcVersion);
  await installFabric(mcVersion, fabricVersionId);

  const options = {
    clientPackage: null,
    root: getMinecraftDir(),
    authorization: {
      access_token: '0',
      client_token: '0',
      uuid: '12345678-1234-1234-1234-123456789abc',
      name: username,
      user_properties: {},
      meta: { type: 'mojang', demo: false }
    },
    version: {
      number: mcVersion,
      type: 'release',
      custom: fabricVersionId
    },
    memory: { max: '4G', min: '2G' },
    forge: null,
    fabric: { loader, version: mcVersion },
    javaPath: null
  };

  launcher.launch(options);
}

module.exports = { launchMinecraftFabric };