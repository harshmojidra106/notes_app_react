export const findNotesInArchieve = (archive, id) => {
        return archive.some(note => note.id === id);
    }
