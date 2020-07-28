var todoInput = document.getElementById('todoInput')

// var todoInputValue = todoInput.value



function addTask() {

    var todoUl = document.getElementById('todoList')
    var li = document.createElement('li')
    li.setAttribute("Class", "textValues")
    var textValue = document.createTextNode(todoInput.value)
    todoUl.appendChild(li)
    li.appendChild(textValue)
    todoInput.value = ""

    // var btn = document.createElement('button')
    // var btns = document.createTextNode('delete')
    // btn.appendChild(btns)
    // li.appendChild(btn)

    var delBtn = document.createElement('i')
    delBtn.setAttribute("class", "fas fa-trash-alt icon")
    delBtn.setAttribute("onclick", "deleteBtn(this)")


    var editBtn = document.createElement('i')
    editBtn.setAttribute("class", "far fa-edit icon")
    editBtn.setAttribute("onclick", "edit(this)")


    li.appendChild(delBtn)
    li.appendChild(editBtn)

    console.log(li)
        // console.log(todoInput.value)

}

function deleteBtn(e) {
    e.parentNode.remove()
}

function edit(e) {
    // var editText = e.parentNode.firstChild.nodeValue
    var editPrompt = prompt("Edit your item", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editPrompt

    // console.log(editText)
}

function deleteAll() {
    var delAll = document.getElementById('todoList')
    delAll.innerHTML = ""
}