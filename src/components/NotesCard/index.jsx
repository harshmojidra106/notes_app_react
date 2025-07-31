import { useNotes } from "../context/note_context"
import { findNotesInArchieve } from "../../utilis/findNotesInArchieve"
import { findNotesInDelete } from "../../utilis/findNotesInDelete"
import { findNotesInImportant } from "../../utilis/findNotesInImportant"
export const NotesCard = ({ id, title, text, isPinned }) => {

    const { notesDispatch, archive,deletelist,important } = useNotes()

    const onPinClik = (id) => {
        !isPinned ? notesDispatch({
            type: 'PIN',
            payload: { id }
        }) : notesDispatch({
            type: 'UNPIN',
            payload: { id }
        })
    }
    const onArchiveClick = (id) => {
        !isNotesInArchieve ? notesDispatch({
            type: 'ADD_TO_ARCHIVE',
            payload: { id }
        }) : notesDispatch({
            type: 'REMOVE_FROM_ARCHIVE',
            payload: { id }
        })
    }


const isNotesInArchieve = findNotesInArchieve(archive, id)

const onDeleteClick =(id)=>{
        !isNotesInDelete ?notesDispatch({
            type:'ADD_TO_DELETE',
            payload:{id}
        }):notesDispatch({
            type:'REMOVE_TO_DELETE',
            payload:{id}
        })
   }
const isNotesInDelete = findNotesInDelete(deletelist, id)
const onImportantClick=(id)=>{
    !isNotesInImportant?notesDispatch({
        type:'ADD_TO_IMPORTANT',
        payload:{id}
    }):notesDispatch({
        type:'REMOVE_TO_IMPORTANT',
        payload:{id}
    })
}
const isNotesInImportant = findNotesInImportant(important,id)
    return (
        <div className=" border border-neutral-800 p-2 rounded-md  w-[300px]" key={id}>


            <div className="flex justify-between  border-gray-500 border-b-2">
                <p>{title}</p>
                {
                    !isNotesInArchieve &&  !isNotesInDelete && !isNotesInImportant ?  <button onClick={() => onPinClik(id)}><span className={isPinned ? 'material-icons' : 'material-symbols-outlined'}>
                         push_pin
                       {/* { isNotesInDelete? '':'push_pin'} */}
                    </span></button> : <></>
                }

            </div>

            <div className="flex flex-col ">
                <p>{text}</p>
                <div className="ml-auto">
                    <button onClick={()=> onImportantClick(id)}> 
                        <span className={isNotesInArchieve && isNotesInDelete && isNotesInImportant? 'material-icons' : 'material-symbols-outlined'}>
                        {
                        'bookmark_star'}
                    </span></button>
                    <button onClick={() => onArchiveClick(id)}>
                        <span className={isNotesInArchieve? 'material-icons' : 'material-symbols-outlined'}>
                           {
                            isNotesInDelete  || isNotesInImportant? '':'archive'
                            }   

                        </span></button>
                    <button onClick={()=> onDeleteClick(id)}> 
                        <span className={isNotesInDelete? 'material-icons' :'material-symbols-outlined'}>
                        {
                        isNotesInArchieve || isNotesInImportant ? '' : 'delete'}
                    </span></button>
                   
                </div>
            </div>
        </div>
    )

}