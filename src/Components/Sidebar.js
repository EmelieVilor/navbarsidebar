import './CSS/sidebar.css'

export default function Sidebar({setPage}){

    console.log("Sidebar received setPage:", setPage); 

    return (
        <div className='Sidebar'>

        <button className='sidebarBtn' onClick={() => setPage('/images/forresthello.gif')}>Hello</button>
        <button className='sidebarBtn' onClick={() => setPage('/images/lionelhello.gif')}>Hello Again</button>
        </div>
    )
}