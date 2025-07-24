<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nexlist Redesign</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <script defer>
    let notes = JSON.parse(localStorage.getItem("nexlist-final")) || [];

    function renderNotes() {
      const grid = document.getElementById("notes");
      grid.innerHTML = "";
      notes.forEach((note, index) => {
        const card = document.createElement("div");
        card.className = "relative border border-gray-300 rounded-lg p-4 shadow-sm bg-gray-50";
        card.innerHTML = `
          <button class="absolute top-2 right-2 text-red-500 hover:text-red-700" onclick="deleteNote(${index})">×</button>
          <button class="absolute top-2 left-2 text-blue-500 hover:text-blue-700" onclick="editNote(${index})">✎</button>
          <h3 class="font-semibold text-lg mb-1">${note.title}</h3>
          <p class="text-sm text-gray-700 whitespace-pre-line">${note.text}</p>
        `;
        grid.appendChild(card);
      });
    }

    function addNote() {
      const title = document.getElementById("note-title").value.trim();
      const text = document.getElementById("note-text").value.trim();
      if (!title && !text) return;

      const note = { title, text };
      notes.unshift(note);
      localStorage.setItem("nexlist-final", JSON.stringify(notes));
      renderNotes();

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

    function searchNotes() {
      const term = document.getElementById("search-input").value.toLowerCase();
      const filtered = notes.filter(note =>
        note.title.toLowerCase().includes(term) || note.text.toLowerCase().includes(term)
      );
      const grid = document.getElementById("notes");
      grid.innerHTML = "";
      filtered.forEach((note, index) => {
        const card = document.createElement("div");
        card.className = "relative border border-gray-300 rounded-lg p-4 shadow-sm bg-gray-50";
        card.innerHTML = `
          <button class="absolute top-2 right-2 text-red-500 hover:text-red-700" onclick="deleteNote(${index})">×</button>
          <button class="absolute top-2 left-2 text-blue-500 hover:text-blue-700" onclick="editNote(${index})">✎</button>
          <h3 class="font-semibold text-lg mb-1">${note.title}</h3>
          <p class="text-sm text-gray-700 whitespace-pre-line">${note.text}</p>
        `;
        grid.appendChild(card);
      });
    }

    window.onload = renderNotes;
  </script>
</head>
<body class="bg-gray-100 text-gray-900 min-h-screen flex items-center justify-center p-4">
  <div class="w-full max-w-xl bg-white shadow-lg rounded-xl p-6">
    <h1 class="text-2xl font-bold mb-4 text-center">🧠 Nexlist</h1>

    <div class="space-y-4">
      <input id="note-title" type="text" placeholder="Titel eingeben..." class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
      <textarea id="note-text" placeholder="Notiz schreiben..." rows="5" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>

      <div class="flex gap-2 items-center">
        <input id="calc-input" type="text" placeholder="Rechnung z.B. 12*3+1" class="flex-grow border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <button onclick="calculate()" class="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">=</button>
        <span id="calc-result" class="min-w-[50px] text-sm text-gray-700"></span>
      </div>

      <button onclick="addNote()" class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded px-4 py-2">💾 Speichern</button>

      <input id="search-input" type="text" placeholder="🔍 Notizen durchsuchen..." oninput="searchNotes()" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400">
    </div>

    <div id="notes" class="mt-6 space-y-4"></div>
  </div>
</body>
</html>
