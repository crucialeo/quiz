var log = console.log.bind(console)
var e = sel => document.querySelector(sel)
var appendHtml = (element, html) => element.insertAdjancentHTML('beforeend', html)
var ajax = function(method, path, data, callback) {
    var r = new XMLHttpRequest()
    r.open(method, path, true)
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange
}
