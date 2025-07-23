const textarea = document.getElementById("main-note");
const calcInput = document.getElementById("calc-input");
const calcResult = document.getElementById("calc-result");

// Notiz speichern
textarea.value = localStorage.getItem("nexlist-note") || "";
textarea.addEventListener("input", () => {
  localStorage.setItem("nexlist-note", textarea.value);
});

function saveNote() {
  localStorage.setItem("nexlist-note", textarea.value);
  alert("Gespeichert!");
}

function clearNote() {
  if (confirm("Wirklich löschen?")) {
    textarea.value = "";
    localStorage.removeItem("nexlist-note");
  }
}

// Rechenfunktion
function calculate() {
  try {
    const result = eval(calcInput.value);
    calcResult.textContent = "= " + result;
  } catch {
    calcResult.textContent = "Ungültige Eingabe";
  }
}
