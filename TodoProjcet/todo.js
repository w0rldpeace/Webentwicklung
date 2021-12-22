function createTask(){
    let div = document.createElement('div');
    div.classList.add('taskDiv');
    let cbox = document.createElement('input');
    let taskInput = document.createElement('input');
    let addButton = document.createElement('button');
    addButton.hidden = true;
    let delButton = document.createElement('button');
    cbox.type = 'checkbox';
    taskInput.id = 'input1'
    taskInput.type = 'text';
    addButton.id = 'btn1';
    addButton.textContent = "Hinzufuegen";
    delButton.id = 'delBtn';
    delButton.textContent = "X";
    div.appendChild(cbox);
    div.appendChild(taskInput);
    div.appendChild(addButton);
    div.appendChild(delButton);
    document.body.appendChild(div);

    delButton.addEventListener("click", () => {
        document.body.removeChild(div);
    })

    taskInput.addEventListener("input", () => {
        addButton.hidden = false;
        if(taskInput.value.length === 0){
            addButton.hidden = true;
        }
    }) 
    
    addButton.addEventListener("click", () => {
        let label = document.createElement('label');
        let inputValue = taskInput.value;
        label.innerText = inputValue;
        taskInput.before(label);
        div.removeChild(taskInput);
        div.removeChild(addButton);
        cbox.addEventListener("change", () => {
            if(cbox.checked){
                label.style.textDecorationLine = 'line-through';
            } else {
                label.style.textDecorationLine = 'none';
            }
        })
    });

    //document.getElementById('inputText').addEventListener("change", createAddButton);
}
