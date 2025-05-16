import './CSS/mainPage.css'

export default function MainPage({page}){

        return (
        <div className='MainPage'>
            <h2>Hello There!</h2>
            <img className='gif' src={page} alt='gif' style={{width: "300px"}}/>
        </div>
    )

};