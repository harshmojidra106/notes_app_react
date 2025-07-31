import { Fragment } from "react/jsx-runtime"
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { useNotes } from "../../components/context/note_context"
import { NotesCard } from "../../components/NotesCard"

export const Delete = ()=>{
      const { deletelist } = useNotes()
    return(
        <Fragment>
           <Navbar/>
             <main className="flex gap-3">
                            <Sidebar />
                             <div>
                                <div className=" flex flex-wrap gap-4 ">
                                    {
                                        deletelist?.length > 0 && deletelist.map(({ id, title, text, isPinned }) => (
                                            <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                        ))
                                    }
                                </div>
                             </div>
                        </main>
        </Fragment>
    )
}  