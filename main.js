const input = document.getElementById("input");
const button = document.getElementById("button");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const inputValue = input.value;
    const fizzBuzz = fizzbuzz(inputValue);
    result.textContent = fizzBuzz;
});

function fizzbuzz(inputValue) {
    if (inputValue % 3 === 0 && inputValue % 5 === 0) {
        return "fizzbuzz";
    } else if (inputValue % 3 === 0) {
        return "fizz";
    } else if (inputValue % 5 === 0) {
        return "buzz";
    } else {
        return NaN;
    }
}
    
