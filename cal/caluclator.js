let string = "";
let inputField = document.querySelector('.input');
let buttons = document.querySelectorAll('.button, .custom-button'); // Combine all button types

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerHTML;

    switch (buttonText) {
      case '=':
        try {
          string = eval(string);
          inputField.value = string;
        } catch (error) {
          inputField.value = 'Error';
          string = "";
        }
        break;
      case 'C':
        string = "";
        inputField.value = string;
        break;
      default:
        string += buttonText;
        inputField.value = string;
        break;
    }
  });
});
