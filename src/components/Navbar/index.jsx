import logo from '../../asset/notes.png';

export const Navbar = ()=>{
return(
<header className='flex px-5 py-3 gap-3 border-b-2 border-black'>
    <div className='w-10 h-10'>
        <img className='w-full h-full' src={logo} alt='it is logo of notes' />
    </div>
    <h1 className='text-indigo-800 text-4xl font-bold'>NoteIt</h1>
</header>
)
}