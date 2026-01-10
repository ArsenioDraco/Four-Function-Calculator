function appendValue(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("mousedown", e => {
        const rect = btn.getBoundingClientRect();
        btn.style.setProperty("--x", e.clientX - rect.left + "px");
        btn.style.setProperty("--y", e.clientY - rect.top + "px");
    });
});
