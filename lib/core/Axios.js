function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {}
}
Axios.prototype.request = function request(config) {
    console.log('gsd1', config)
}

module.exports = Axios
