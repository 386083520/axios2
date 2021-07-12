var axios = (function () {
    'use strict';

    var defaults = {
        gsd2: 'gsd2'
    };
    var defaults_1 = defaults;

    function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {};
    }
    Axios.prototype.request = function request(config) {
        console.log('gsd1', config);
    };

    Axios.prototype.get = function request(config) {
        console.log('gsd1get', config);
    };

    Axios.prototype.getUri = function getUri(config) {
        console.log('gsd1getUri', config);
    };

    var Axios_1 = Axios;

    function extend(a, b, thisArg) {
        Object.keys(b).forEach(item => {
            a[item] = b[item];
        });
    }

    var utils = {
        extend: extend
    };

    function createInstance(defaultConfig) {
        console.log('gsd2', defaultConfig);
        var context = new Axios_1(defaultConfig);
        // TODO
        var instance = Axios_1.prototype.request.bind(context);
        utils.extend(instance, Axios_1.prototype);
        console.dir(instance);
        return instance
    }
    var axios = createInstance(defaults_1);
    var axios_1 = axios;

    return axios_1;

}());
