let taskList = [];
let inputTodo = document.querySelector("#inputTodo");
let inputDate = document.querySelector("#date");

function addTodo() {
    let value = inputTodo.value
    let dvalue = inputDate.value
    // console.log(value);
    // taskList.unshift(value);
    taskList.unshift({todo: value, date: dvalue});
    inputTodo.value = '';
    displayList();
}

function displayList() {
    let listBox = document.querySelector("#listBox");
    let newList = '';
    for(let i = 0; i < taskList.length; i++){
        newList += `
            <li class="listItem">
                <span>${taskList[i].todo}</span>
                <span>${taskList[i].date}</span>
                <span class="del" onclick="taskList.splice(${i}, 1); displayList();">&#x1f5d1;</span>
            </li>
        `
    }
    listBox.innerHTML = newList;
}
