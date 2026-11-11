
let notesTitles = ['Ba', 'Aufgabe'];
let notes = ['banana', 'rasen mähen'];

let trashNotes = [];
let trashNotesTitle = [];


function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}


function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}


function getNoteTemplate(indexNote) {
    return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]} <button onclick="notetoTrash(${indexNote})">X</button></p>`;
}


function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ title: ${trashNotesTitle[indexTrashNote]} -> ${trashNotes[indexTrashNote]} <button onclick="deleteNote(${indexTrashNote})">X</button></p>`;
}


function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    if (noteInput.trim() === "") {
        return;
    }

    notes.push(noteInput);
    notesTitles.push("");

    renderNotes();

    noteInputRef.value = "";
}


// myVersion:
// function deleteNote(indexNote) {
//     let trashNote = notes.splice(indexNote, 1);
//     trashNotes.push(trashNote);
//     renderNotes();
//     renderTrashNotes();
// }

// function deleteTrashNote(indexTrashNote) {
//     trashNotes.splice(indexTrashNote, 1);
//     renderTrashNotes();
// }


// Kevins version:

function notetoTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1)[0];
    trashNotes.push(trashNote);

    let trashNoteTitle = notesTitles.splice(indexNote, 1)[0];
    trashNotesTitle.push(trashNoteTitle);

    renderNotes();
    renderTrashNotes();
}


function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitle.splice(indexTrashNote, 1);

    renderNotes();
    renderTrashNotes();
}


// notizen archivieren


// need declaration on monday