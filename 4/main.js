let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    const btnReset = document.createElement("button");
    btn.textContent = "Dodaj 10 elementów do listy";
    btnReset.textContent = "Wyczyść";
    btn.style.fontSize = "28px";
    btnReset.style.fontSize = "28px";
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    const list = document.createElement("ul");
    list.style.listStyle = "none";
    document.body.appendChild(list);
    btn.addEventListener('click', createElements);
    btnReset.addEventListener('click', cleanList);
}

const createElements = () => {
    for (let i = 0; i < 10; i++) {
        const liItem = document.createElement("li");
        liItem.textContent = `Element nr ${orderElement++}`;
        liItem.style.fontSize = `${size++}px`;
        document.querySelector("ul").appendChild(liItem);
    }
}

const cleanList = () => {
    document.querySelector("ul").textContent = "";
    size = 10;
    orderElement = 1;
}

init ()