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

    for (i = 0; i < 5; i++) {
        const area = createElement(0);
        container.appendChild(area)
    };

    container.style = "display: flex"

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

    for (i = 0; i < 5; i++) {
        const area = createSecondElement(0);
        container.appendChild(area)
    };

    container.style = "display: flex"


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

function createColorElement() {
    const colors = [
        "blue",
        "yellow",
        "green"
    ];

    const area = document.createElement("div");
    area.style.border = "1px solid black";
    area.style.width = "50px";
    area.style.height = "50px";
    area.className = colors.shift();

    area.addEventListener("click", function (event) {
        colors.push(event.target.className);
        event.target.className = colors.shift();
    })

    return area
};


function createColorContainer() {
    const container = document.createElement("div");


    for (i = 0; i < 5; i++) {
        const area = createColorElement();
        container.appendChild(area)
    };

    container.style = "display: flex";
    return container
};

const ColorContainer = createColorContainer();

document.body.appendChild(ColorContainer);
