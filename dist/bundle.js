var axios = (function () {
    'use strict';

    var xhr = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
            resolve('gsd xhrAdapter');
        })
    };

    function getDefaultAdapter() {
        var adapter;
        if (typeof XMLHttpRequest !== 'undefined') {
            adapter = xhr;
        }
        return adapter;
    }
    var defaults = {
        gsd2: 'gsd2',
        adapter: getDefaultAdapter(),
    };
    var defaults_1 = defaults;

    var dispatchRequest = function dispatchRequest(config) {
        console.log('dispatchRequest', config);
        var adapter = defaults_1.adapter;
        return adapter(config).then(function onAdapterResolution(response) {
            return response + ' gsdadapter'
        }, function onAdapterRejection(reason) {

        })
    };

    function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {};
    }
    Axios.prototype.request = function request(config) {
        console.log('gsd1', config);
        var promise;
        promise = Promise.resolve(config);
        var chain = [dispatchRequest, undefined];
        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
        }
        return promise
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
