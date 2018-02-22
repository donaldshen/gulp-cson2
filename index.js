const through = require('through2')
const PluginError = require('plugin-error')
const cson = require('cson-parser')

const PLUGIN_NAME = 'gulp-cson2'

module.exports = ({ indent = 2 } = {}) => {
  return through.obj((file, enc, cb) => {
    if (file.isStream()) {
      cb(new PluginError(PLUGIN_NAME, 'Stream mode not supported!'))
    } else {
      const json = cson.parse(file.contents.toString())
      if (json instanceof Error) {
        cb(new PluginError(PLUGIN_NAME, json))
      } else {
        file.contents = Buffer.from(JSON.stringify(json, null, indent))
        // NOTE: async operation lets gulp-watch's cb print file's path with '.cson' as extname
        setImmediate(() => {
          file.extname = '.json'
          cb(null, file)
        })
      }
    }
  })
}
