import logo from "../assets/banner-stack.png"
export const BrandColor = "bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]";
const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between max-w-300 mx-auto items-center px-5 lg:px-0">
            <div>
            <h2 className="font-extrabold text-4xl lg:text-6xl text-[#0F172A] text-center lg:text-left">Build Your Ideal</h2>
            <h2 className={`text-transparent bg-clip-text ${BrandColor} font-extrabold text-4xl lg:text-6xl text-[#0F172A] text-center lg:text-left`}>Development Stack</h2>
            <p className="my-6 text-center lg:text-left">Explore frontend, backend, database, and tooling options,<br/>
                compare them side by side, and put together the stack that fits your<br/>
                next project.</p>
            <div className="flex gap-3 w-full lg:w-auto">
                <button className={`${BrandColor} p-3 rounded-xl w-full lg:w-auto`}><a href="">Explore Technologies</a></button>
                <button className="bg-[#E5E7EB] p-3 rounded-xl w-full lg:w-auto"><a href="">Learn More</a></button>
            </div>
            </div>
            <img src={logo} className="w-full max-w-82.5 lg:max-w-125 mt-8 lg:mt-0 max-h-105"></img>
        </div>
    );
};

export default Banner;