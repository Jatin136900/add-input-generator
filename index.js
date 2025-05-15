let count = 0;
let button = document.getElementById("btn");
let inputname = document.getElementById("input");
let container = document.getElementById("container");
let inputList = [];


inputname.addEventListener("input", () => {
    let value = inputname.value;
    inputList.forEach(input => {
        input.value = value;
    });
});

button.addEventListener("click", () => {
    if (count < 4) {
        let Hulk = document.createElement("input");
        Hulk.placeholder = "Enter your message";
        Hulk.readOnly = true;
        Hulk.value = inputname.value;
        container.append(Hulk);
        inputList.push(Hulk);
        count++;
    } else {
        alert("You have used all input 5");
    }
});
