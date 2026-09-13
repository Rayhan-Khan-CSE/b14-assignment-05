import logo from "../assets/logo-text.png"
const Nav = () => {
    return (
        <nav className="max-w-300 mx-auto flex justify-between items-center my-4 ">
                <img src={logo}></img>
                <ul className="flex items-center gap-4">
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