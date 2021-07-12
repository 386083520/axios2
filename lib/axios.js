var defaults = require('./defaults')
var Axios = require('./core/Axios')
var utils = require('./utils')
function createInstance(defaultConfig) {
    console.log('gsd2', defaultConfig)
    var context = new Axios(defaultConfig);
    // TODO
    var instance = Axios.prototype.request.bind(context)
    utils.extend(instance, Axios.prototype)
    console.dir(instance)
    return instance
}
var axios = createInstance(defaults);
module.exports = axios
