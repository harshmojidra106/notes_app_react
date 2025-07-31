import {  NavLink } from "react-router-dom"

export const Sidebar = () => {
const getStyles =({isActive})=>{
    const styles = 'flex align-center gap-1  px-2 py-1 rounded-tr-full rounded-br-full'
    return isActive?`text-slate-50 bg-indigo-800 ${styles}`: `hover:text-slate-50 hover:bg-indigo-800 ${styles}`
}

    return (
        <aside>
            <div className="flex flex-col gap-3 w-[150px] h-screen border-r-2 border-black ">
                <NavLink className={getStyles}  to='/'>
                    <span class="material-symbols-outlined">
                        home
                    </span>
                    <span>Home</span></NavLink>
                <NavLink className={getStyles} to='/archive'>
                    <span className="material-symbols-outlined">archive</span>
                    <span>Archive</span></NavLink>
                <NavLink className={getStyles} to='/important'>
                    <span className="material-symbols-outlined">label_important </span>
                    <span>Important</span></NavLink>
                <NavLink className={getStyles} to='/bin'>
                    <span className="material-symbols-outlined">delete </span>
                    <span>Bin</span></NavLink>
            </div>
        </aside>
    )
}