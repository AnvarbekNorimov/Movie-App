import { Link } from "react-router-dom"
import {} from "./Header.css"
const Header = () => {
  return (
    <div className=" relative container mx-auto">
            <div className="bg-[#121212] ">
         <div className=" Movi__Header p-5 flex align-center justify-between Header ">
        <Link className="uppercase Header__logo" to="/">Movi app</Link>
        <ul className=" Header__link flex ">
            <li className="Header__link-title">
                <Link className="header__link-border" to={"/"}>Home</Link>
            </li>
            <li className="Header__link-title">
                <Link to={"/Movie"}>Movie</Link>
            </li>
            <li className="Header__link-title">
                <Link to={"/People"}>People</Link>
            </li>
        </ul>
    </div>
    </div>
    </div>
  )
}

export default Header