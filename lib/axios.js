var defaults = require('./defaults')
var Axios = require('./core/Axios')
function createInstance(defaultConfig) {
    console.log('gsd2', defaultConfig)
    var context = new Axios(defaultConfig);
    // TODO
    var instance = Axios.prototype.request.bind(context)
    return instance
}
var axios = createInstance(defaults);
axios({
    gsd: 'gsd'
})
