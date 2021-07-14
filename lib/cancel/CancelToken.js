function CancelToken(executor) {
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    executor(function cancel(message) {
        resolvePromise('gsd 测试失败')
    })
}

module.exports = CancelToken
