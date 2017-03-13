const fs = require('fs')
const path = require('path')

const STATIC_MANIFEST_LOCATION = 'build/cache.manifest'

const writeToManifest = () =>
  fs.writeFileSync(path.join(__dirname, '..', STATIC_MANIFEST_LOCATION), manifest())

const manifest = () => {
  const assetMap = require('build/asset-manifest.json')
  return `CACHE MANIFEST
# Revised on ${new Date().toLocaleString()}

CACHE:
index.html
icon.png
favicon.ico
${assetMap['main.js']}
${assetMap['main.css']}

NETWORK:
*
`
}

// if this is run as a script, like if __name == 'main'
if (require.main === module)
  writeToManifest()

