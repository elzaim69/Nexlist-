let notes = JSON.parse(localStorage.getItem("nexlist-keep")) || [];

function renderNotes() {
  const grid = document.getElementById("notes-grid");
  grid.innerHTML = "";
  notes.forEach((note, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = \`
      <button class="delete-btn" onclick="deleteNote(\${i})">×</button>
      <h3>\${note.title}</h3>
      <p>\${note.text}</p>
    \`;
    grid.appendChild(card);
  });
}

function addNote() {
  const title = document.getElementById("note-title").value.trim();
  const text = document.getElementById("note-text").value.trim();
  if (text === "" && title === "") return;
  notes.unshift({ title, text });
  localStorage.setItem("nexlist-keep", JSON.stringify(notes));
  document.getElementById("note-title").value = "";
  document.getElementById("note-text").value = "";
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("nexlist-keep", JSON.stringify(notes));
  renderNotes();
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
