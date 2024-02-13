function toggleNotes(noteId) {
    var note = document.getElementById(noteId);
    if (note.style.display === "none") {
        note.style.display = "block";
    } else {
        note.style.display = "none";
    }
}