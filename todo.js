var log = console.log.bind(console)
var e = sel => document.querySelector(sel)
var appendHtml = (element, html) => element.insertAdjacentHTML('beforeend', html)
var ajax = function(method, path, data, callback) {
    var r = new XMLHttpRequest()
    r.open(method, path, true)
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function() {
        if (r.readystate == 4) {
            callback(r.response)
        }
    }
    r.send(data)
}

var insertInput = function() {
    var t = `
    <div>
        <input id="id-input-task">
        <button id="id-button-add" class="todo-add">add button</button>
    </div>
    `
    appendHtml(e('#id-div-todo-container'), t)
}

var bindEventAdd = () => {
    var container = e('#id-div-todo-container')
    container.addEventListener('click', function(event) {
        var self = event.target
        if (self.classList.contains('todo-add')) {
            var input = e('#id-input-task')
            var value = input.value
            var data = {
                task: value,
            }
            var url = 'https://vip.kybmig.cc/sandbox/todo/476274948/add'
            data = JSON.stringify(data)
            ajax('POST', url, data, function(r) {
                log('rrrr', r)
                var t = JSON.parse(r)
                log('创建成功', t)
            })
        }
    })
}

var bindEvents = () => {
    bindEventAdd()
}


var __main = () => {
    insertInput()
    bindEvents()
}

__main()
