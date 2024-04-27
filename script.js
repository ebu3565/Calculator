const display = document.getElementById('display');
function appendToDisplay(input){
  display.value += input;
};

function clearDisplay(){
 display.value = "";
};

// Function to calculate the expression and display the result
function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
