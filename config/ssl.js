module.exports.faltu = {
  key: require('fs').readFileSync(__dirname + '/myssl.key', 'utf8'),
  cert: require('fs').readFileSync(__dirname + '/myssl.crt', 'utf8')
}