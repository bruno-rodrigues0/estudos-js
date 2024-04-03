Number.prototype.toLocaleString('pt-br')

const display = document.querySelector("#idexpression")

const displayInArea = value => {
    display.value += value;
};

// const backspace = () => {
//     let value = display.value;
//     value = value.split('');
//     value.pop();
//     value = value.join('');

//     display.value = value;
//     return;
// }

const copyValue = () => {
    navigator.clipboard.writeText(display.value);
    return;
}

const clean = () => {
    display.value ='';
    return;
}

const calculate = () => {
    let value = display.value;
    display.value = eval(value);
}


// elemento em gaveta

const showCalc = () => {
    let container = document.querySelector(".container");

    container.classList.toggle("showme");
}
