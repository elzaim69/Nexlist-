let notes = JSON.parse(localStorage.getItem("nexlist-keep-pro")) || [];

function renderNotes() {
  const grid = document.getElementById("notes-grid");
  grid.innerHTML = "";
  notes.forEach((note, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = \`
      <button class="delete-btn" onclick="deleteNote(\${i})">×</button>
      <button class="edit-btn" onclick="editNote(\${i})">✎</button>
      <h3>\${note.title}</h3>
      <p>\${note.text}</p>
    \`;
    grid.appendChild(card);
  });
}

function addNote() {
  const title = document.getElementById("note-title").value.trim();
  const text = document.getElementById("note-text").value.trim();
  if (title === "" && text === "") return;
  notes.unshift({ title, text });
  localStorage.setItem("nexlist-keep-pro", JSON.stringify(notes));
  document.getElementById("note-title").value = "";
  document.getElementById("note-text").value = "";
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("nexlist-keep-pro", JSON.stringify(notes));
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
