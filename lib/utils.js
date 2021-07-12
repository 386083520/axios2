function extend(a, b, thisArg) {
    Object.keys(b).forEach(item => {
        a[item] = b[item]
    })
}

module.exports = {
    extend: extend
}
