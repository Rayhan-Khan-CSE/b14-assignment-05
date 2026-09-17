import { LuDot } from "react-icons/lu";
import logo from "../assets/logo-text.png"
const Footer = () => {
    return (
        <footer>
            <div className="border-[#F1F5F9] border my-5">
                <div className="flex flex-col md:flex-row justify-between max-w-300 mx-auto px-5 md:pr-20 pb-10 py-6">
                    <div className="text-center md:text-left">
                        <img src={logo} className="mx-auto md:mx-0"></img>
                        <p className="text-[#64748B]">Curated tools, technologies, and resources for developers building
                            <br />modern software.</p>
                        <ul className="flex justify-center md:justify-normal items-center gap-3 pt-4">
                            <li className="font-bold text-[#475569]"><a href="">GitHub</a></li>
                            <li className="md:hidden"><LuDot /></li>
                            <li className="font-bold text-[#475569]"><a href="">Twitter</a></li>
                            <li className="md:hidden"><LuDot /></li>
                            <li className="font-bold text-[#475569]"><a href="">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <h2 className="font-bold text-[#0F172A]">PRODUCT</h2>
                        <ul>
                            <li className="text-[#64748B]">Home</li>
                            <li className="text-[#64748B]">Technologies</li>
                            <li className="text-[#64748B]">Projects</li>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <h2 className="font-bold text-[#0F172A]">COMPANY</h2>
                        <ul>
                            <li className="text-[#64748B]">About</li>
                            <li className="text-[#64748B]">Contact</li>
                            <li className="text-[#64748B]">Careers</li>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <h2 className="font-bold text-[#0F172A]">LEGAL</h2>
                        <ul>
                            <li className="text-[#64748B]">Privacy Policy</li>
                            <li className="text-[#64748B]">Terms of Service</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-25 md:justify-between max-w-300 mx-auto pt-2 pr-4 pb-10">
                <p className="text-[#94A3B8]">© 2026 Dev Stack. All rights reserved.</p>
                <ul className="flex items-center gap-4">
                    <li className="text-[#94A3B8]"><a href="">Privacy</a></li>
                    <li className="text-[#94A3B8]"><a href="">Terms</a></li>
                </ul>
            </div>

        </footer>
    );
};

export default Footer;