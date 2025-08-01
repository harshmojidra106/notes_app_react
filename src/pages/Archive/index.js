import { Fragment } from "react/jsx-runtime"
import { Sidebar } from "../../components/Sidebar"
import { Navbar } from "../../components/Navbar"
import { useNotes } from "../../components/context/note_context"
import { NotesCard } from "../../components/NotesCard"


export const Archive = () => {

    const { archive } = useNotes()
    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                 <div>
                    <div className=" flex flex-wrap gap-4 ">
                        {
                            archive?.length > 0 && archive.map(({ id, title, text, isPinned }) => (
                                <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                            ))
                        }
                    </div>
                 </div>
            </main>
        </Fragment>
    )
}