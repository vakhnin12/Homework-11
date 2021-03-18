function createElement(value) {
    const area = document.createElement("div");

    area.style.border = "1px solid black";
    area.style.width = "50px";
    area.style.height = "50px";


    const span = document.createElement("span");
    let text = value;
    span.innerText = text;

    area.appendChild(span);

    return area
};

function createContainer() {
    const container = document.createElement("div");

    const area1 = createElement(0);
    const area2 = createElement(0);
    const area3 = createElement(0);
    const area4 = createElement(0);
    const area5 = createElement(0);

    container.style = "display: flex"

    container.appendChild(area1);
    container.appendChild(area2);
    container.appendChild(area3);
    container.appendChild(area4);
    container.appendChild(area5);

    container.addEventListener("click", function (event, value) {
        value = +event.target.lastChild.innerText;
        if (event.target.lastChild.innerText) {
            event.target.lastChild.innerText = value + 1;
        }
    })
    return container
};

const container = createContainer();

document.body.appendChild(container);

function createButton(text, buttonName) {
    const button = document.createElement("button");
    // const class1 = className;
    button.type = "button";
    button.className = buttonName;
    button.innerText = text;

    return button;
};

function createSecondElement(value) {
    const area = document.createElement("div");

    area.style.border = "1px solid black";
    area.style.width = "50px";
    area.style.height = "50px";

    const span = document.createElement("span");
    let text = value;
    span.innerText = text;

    const buttonPlus = createButton("+", "plus");
    const buttonMinus = createButton("-", "minus")

    area.appendChild(buttonPlus);
    area.appendChild(span);
    area.appendChild(buttonMinus);

    return area
};

function createSecondContainer() {
    const container = document.createElement("div");

    const area1 = createSecondElement(0);
    const area2 = createSecondElement(0);
    const area3 = createSecondElement(0);
    const area4 = createSecondElement(0);
    const area5 = createSecondElement(0);

    container.style = "display: flex"

    container.appendChild(area1);
    container.appendChild(area2);
    container.appendChild(area3);
    container.appendChild(area4);
    container.appendChild(area5);

    container.addEventListener("click", function (event, value) {
        if (event.target.className === "plus") {
            value = +event.target.nextSibling.innerText;
            event.target.nextSibling.innerText = value + 1;
        } else if (event.target.className === "minus") {
            value = +event.target.previousSibling.innerText;
            event.target.previousSibling.innerText = value - 1;
        }
    })
    return container
};

const secondContainer = createSecondContainer();

document.body.appendChild(secondContainer);

function createColorElement(value) {
    const area = document.createElement("div");
    area.style.border = "1px solid black";
    area.style.width = "50px";
    area.style.height = "50px";
    area.className = value

    return area
};

function createColorContainer() {
    const container = document.createElement("div");

    const area1 = createColorElement("blue");
    const area2 = createColorElement("blue");
    const area3 = createColorElement("blue");
    const area4 = createColorElement("blue");
    const area5 = createColorElement("blue");

    container.style = "display: flex"

    container.appendChild(area1);
    container.appendChild(area2);
    container.appendChild(area3);
    container.appendChild(area4);
    container.appendChild(area5);

    

    container.addEventListener("click", function (event) {
        event.target.className;
        if (event.target.className === "blue") {
            event.target.className = "yellow";
        }else if (event.target.className === "yellow"){
            event.target.className = "green";
        }else if(event.target.className === "green"){
            event.target.className = "blue";
        };
    })
    return container
};

const ColorContainer = createColorContainer();

document.body.appendChild(ColorContainer);