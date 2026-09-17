import logo from "../assets/logo-text.png"
import logo3 from "../assets/hamburger.png"
const Nav = () => {
    return (
        <nav className="max-w-300 mx-auto flex justify-between items-center my-4 px-4 md:px-0 ">
                <img src={logo3} className="w-8 h-8 md:hidden"></img>
                <img src={logo}></img>
                <ul className="hidden md:flex items-center gap-4">
                    <li><a href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className="flex items-center gap-3">
                    <button><a href="">Sign In</a></button>
                    <button className="bg-[#D91B7E] text-[#FFFFFF] p-2 rounded-3xl ]"><a href="">Sign Up</a></button>
                </div>
        </nav>
    );
};

export default Nav;