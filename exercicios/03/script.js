Number.prototype.toLocaleString('pt-br')

const display = document.querySelector("#idexpression")

const displayInArea = value => {

    if(value === 'C'){
        display.value ='';
        return;
    }
    display.value += value;
};

const backspace = () => {
    let value = display.value;
    value = value.split('');
    value.pop();
    value = value.join('');

    display.value = value;
    return;
}


const calculate = () => {
    let value = display.value;
    display.value = eval(value);
}
