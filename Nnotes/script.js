const addNoteBtn = document.getElementById('addNote');
const noteText = document.getElementById('noteText');
const notesContainer = document.getElementById('notesContainer');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

function displayNotes() {
  notesContainer.innerHTML = '';
  notes.forEach((note, index) => {
    const noteCard = document.createElement('div');
    noteCard.className = 'note-card';

    const input = document.createElement('input');
    input.type = 'text';
    input.value = note;
    input.className = 'note-input';
    input.setAttribute('readonly', true);

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = '✏️';

    let isEditing = false;

    editBtn.onclick = () => {
      if (!isEditing) {
        input.removeAttribute('readonly');
        input.focus();
        editBtn.textContent = '💾'; // Change icon to save
        isEditing = true;
      } else {
        notes[index] = input.value.trim();
        localStorage.setItem('notes', JSON.stringify(notes));
        input.setAttribute('readonly', true);
        editBtn.textContent = '✏️';
        isEditing = false;
      }
    };

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.textContent = '🗑️';
    delBtn.onclick = () => {
      notes.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(notes));
      displayNotes();
    };

    noteCard.appendChild(input);
    noteCard.appendChild(editBtn);
    noteCard.appendChild(delBtn);
    notesContainer.appendChild(noteCard);
  });
}

addNoteBtn.addEventListener('click', () => {
  const text = noteText.value.trim();
  if (text) {
    notes.push(text);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteText.value = '';
    displayNotes();
  }
});

window.onload = displayNotes;
