const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value.toLowerCase()
    const reverse = reverseString(value)

    if (value == "") {
        alert("Please type something...")
    } else if (value === reverse) {
        alert("It is a palindrome!")
    } else {
        alert("It is not a palindrome!")
    }
    
    input.value = ""
}

// Add event listener to input field
input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        check(); // Call the check function when Enter key is pressed
    }
});