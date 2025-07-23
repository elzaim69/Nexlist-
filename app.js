let notes = JSON.parse(localStorage.getItem("nexlist-cards")) || [];

const noteList = document.getElementById("note-list");
const noteInput = document.getElementById("note-input");
const feedback = document.getElementById("feedback");

function renderNotes() {
  noteList.innerHTML = "";
  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note-card";
    div.innerHTML = `
      <button class="delete-btn" onclick="deleteNote(${index})">×</button>
      ${note}
    `;
    noteList.appendChild(div);
  });
}

function addNote() {
  const text = noteInput.value.trim();
  if (text === "") return;
  notes.unshift(text);
  localStorage.setItem("nexlist-cards", JSON.stringify(notes));
  noteInput.value = "";
  showFeedback();
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("nexlist-cards", JSON.stringify(notes));
  renderNotes();
}

function showFeedback() {
  feedback.classList.remove("hidden");
  setTimeout(() => {
    feedback.classList.add("hidden");
  }, 1500);
}

function calculate() {
  const input = document.getElementById("calc-input").value;
  const result = document.getElementById("calc-result");
  try {
    result.textContent = "= " + eval(input);
  } catch {
    result.textContent = "Fehler";
  }
}

renderNotes();
