function press(value) {
    document.getElementById("screen").value += value;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

function backspace() {
    let screen = document.getElementById("screen");
    screen.value = screen.value.slice(0, -1);
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
