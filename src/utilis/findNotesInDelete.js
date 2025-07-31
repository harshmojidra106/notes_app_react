export const findNotesInDelete = (deletelist, id) => {
        return deletelist.some(note => note.id === id);
    }

