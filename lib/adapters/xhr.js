module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        resolve('gsd xhrAdapter')
    })
}
