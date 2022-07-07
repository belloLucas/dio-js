let items = document.getElementById('items2');

function adicionar() {
    const checkItem = document.getElementById('text').value;
    let createCheck = document.createElement("input");
    let createLabel = document.createElement("label");
    createLabel.innerHTML = checkItem;
    createCheck.setAttribute("type", "checkbox");
    items2.appendChild(createCheck);
    items2.appendChild(createLabel);
    // console.log(checkItem);
}
