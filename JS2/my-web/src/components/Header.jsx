import neko from '/neko.jpg'

export default function Header(){
    const now = new Date()
    return(
    
    <header style={{ padding: '20px'}}>
        {/* <img src={neko} alt="Image" /> */}
        {/* <h2>Валерик</h2> */}
        <span>Время: {now.toLocaleTimeString()}</span>
    </header>
    
    )
}