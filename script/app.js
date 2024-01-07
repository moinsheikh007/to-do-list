const inputFiled = document.getElementById('inputField');

const listContainer = document.getElementById('listContainer');

inputFiled.addEventListener('keypress', function (event) {
    if(event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('addBtn').click();
        saveDataOnLocalStorage()
    }
})

function addTask () {
    if(inputFiled.value === '') {
        alert('You Must Write Something')
    }
    else {
        const li = document.createElement('li');
        li.innerHTML = inputFiled.value;
        listContainer.appendChild(li);

        const span = document.createElement('span');
        span.innerHTML = '&#10005';
        li.appendChild(span)
    }
    inputFiled.value = '';
    saveDataOnLocalStorage();
}

listContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('active');
        saveDataOnLocalStorage()
    }
    else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove(event.target)
        saveDataOnLocalStorage()
    }
})

function saveDataOnLocalStorage () {
    localStorage.setItem('To-Do-Task', listContainer.innerHTML);
}

function displayDataFromLocalStorage () {
    listContainer.innerHTML = localStorage.getItem('To-Do-Task');
}

displayDataFromLocalStorage()