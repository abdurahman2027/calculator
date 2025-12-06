function press(value) {
    document.getElementById("screen").value += value;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

function invert() {
    let screen = document.getElementById("screen");
    if (screen.value) {
        screen.value = parseFloat(screen.value) * -1;
    }
}

function calculate() {
    let input = document.getElementById("screen").value;
    try {
        document.getElementById("screen").value = eval(input);
    } catch {
        document.getElementById("screen").value = "Error";
    }
}
