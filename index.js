const form = document.forms.namedItem('add');
const osnova_input = document.querySelector("input #osnova");

form.onsubmit = function(e) {
    e.preventDefault();

    const inputs = this.querySelectorAll('input');
    const selectBoxes = this.querySelectorAll('select');
    let error = false;
    const object = {};

    function handleInput(input) {
        if (osnova_input === "") {
            error = true;
            input.style.border = '1px solid red'; 
        } else {
            input.style.border = '1px solid green'; 
            object[input.placeholder] = input.value; 
        }
    }

    function handleSelect(selectBox) {
        if (selectBox.value.trim() === '') {
            error = true;
            selectBox.style.border = '1px solid red'; 
        } else {
            selectBox.style.border = '1px solid black'; 
            object[selectBox.name] = selectBox.value;  
        }
    }

    inputs.forEach(handleInput);
    selectBoxes.forEach(handleSelect);

    if (error) {
        alert('Please fill in all fields.');
        return;
    }

    form.reset();
    console.log(object); 
};
