import CartWidget from "./CartWidget"
export default function NavBar(){
    return(
        <nav>
            <img src="c:\Users\User\Desktop\logo cortinas.png" alt="" />
            <li>
                <a href="#">diseños</a>
            </li>
            <li>
                <a href="#">medidas</a>
            </li>
            <li>
                <a href="#">barrales</a>
            </li>
             <CartWidget/>
        </nav>
    )
}