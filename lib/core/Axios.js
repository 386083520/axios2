function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {}
}
Axios.prototype.request = function request(config) {
    console.log('gsd1', config)
}

Axios.prototype.get = function request(config) {
    console.log('gsd1get', config)
}

Axios.prototype.getUri = function getUri(config) {
    console.log('gsd1getUri', config)
}

module.exports = Axios
