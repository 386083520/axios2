var dispatchRequest = require('./dispatchRequest')
var InterceptorManager = require('./InterceptorManager')
function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    }
}
Axios.prototype.request = function request(config) {
    console.log('gsd1', config)
    var promise;
    promise = Promise.resolve(config);
    var chain = [dispatchRequest, undefined];
    while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
    }
    return promise
}

Axios.prototype.get = function request(config) {
    console.log('gsd1get', config)
}

Axios.prototype.getUri = function getUri(config) {
    console.log('gsd1getUri', config)
}

module.exports = Axios
