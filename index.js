 let count = 0;
    let button = document.getElementById("btn");
    let inputField = document.getElementById("input");
    let container = document.getElementById("container");

    button.addEventListener("click", () => {
      let inputText = inputField.value.trim();
      if (count < 5) {
        let hulk = document.createElement("input");
        hulk.placeholder="Enter your message "
        hulk.textContent = inputText;
        container.appendChild(hulk);
        count++;
        inputField.value = ""; 
      } else {
        alert("You have used all the inputs:5");
      }
    });