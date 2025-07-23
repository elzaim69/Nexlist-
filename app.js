let notes = JSON.parse(localStorage.getItem("nexlist-final")) || [];

function renderNotes() {
  const grid = document.getElementById("notes-grid");
  grid.innerHTML = "";
  notes.forEach((note, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <button class="delete-btn" onclick="deleteNote(${i})">×</button>
      <button class="edit-btn" onclick="editNote(${i})">✎</button>
      <h3>${note.title}</h3>
      <p>${note.text}</p>
    `;
    grid.appendChild(card);
  });
}

function addNote() {
  const title = document.getElementById("note-title").value.trim();
  const text = document.getElementById("note-text").value.trim();
  if (!title && !text) return;

  const newNote = { title, text };
  notes.unshift(newNote); // NEUE Notiz wird oben hinzugefügt
  localStorage.setItem("nexlist-final", JSON.stringify(notes));
  renderNotes();

  // Felder leeren
  document.getElementById("note-title").value = "";
  document.getElementById("note-text").value = "";
  document.getElementById("calc-input").value = "";
  document.getElementById("calc-result").textContent = "";
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("nexlist-final", JSON.stringify(notes));
  renderNotes();
}

function editNote(index) {
  const note = notes[index];
  document.getElementById("note-title").value = note.title;
  document.getElementById("note-text").value = note.text;
  deleteNote(index);
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
