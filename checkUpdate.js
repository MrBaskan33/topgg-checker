const axios = require("axios")
const packageJson = require("./package.json")
global.hasCheckedForUpdates = global.hasCheckedForUpdates || false

async function checkUpdates() {
  try {
    const data = await axios({ method: "GET", url: "https://registry.npmjs.org/topgg-checker/latest" }).then(res => res.data.version)
    if(packageJson.version !== data) {
      return console.error("Your topgg-checker version is outdated.\nUpdate it by running 'npm i topgg-checker@latest'")
    } 
  } catch (error) {
    if(err.message == "Request failed with status code 429") {
      return console.error("Too many requests to check the latest version of topgg-checker. Please try again later.")
    }
    return console.error("Error occurred while checking for updates:", error)
  }
}

async function initCheckUpdates() {
  if(!global.hasCheckedForUpdates) {
    await checkUpdates()
    global.hasCheckedForUpdates = true
  }
}

module.exports = { initCheckUpdates }
