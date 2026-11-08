<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Local Storage</title>

    <script src="./script.js"></script>
</head>
<body onload="init()">
    <h1>Local Storage</h1>
    
    <input id="data_input" type="text">
    <button onclick="saveData()">save</button>

    <div id="content"></div>
</body>
</html>





let myData = ['Banana','not Banana', 'Apple'];

function init(){
    getFromLocalStorage();
    render()
}



function saveData(){
    let inputRef = document.getElementById('data_input');

    if(inputRef.value != ""){
        myData.push(inputRef.value);
    }

    saveToLocalStorage();

    render();
    inputRef.value = "";
}


function saveToLocalStorage(){
}


function getFromLocalStorage() {
}


function render(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let index = 0; index < myData.length; index++) {
        contentRef.innerHTML += `<p>${myData[index]}</p>`
    }
}