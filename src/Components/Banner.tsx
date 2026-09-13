import logo from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className="flex justify-between max-w-300 mx-auto items-center">
            <div>
            <h2 className="font-extrabold text-6xl text-[#0F172A]">Build Your Ideal</h2>
            <h2 className=" text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] font-extrabold text-6xl text-[#0F172A]">Development Stack</h2>
            <p className="my-6">Explore frontend, backend, database, and tooling options,<br/>
                compare them side by side, and put together the stack that fits your<br/>
                next project.</p>
            <div className="flex gap-3">
                <button className=" bg-gradient-to-r from-[#F97316] to-[#EC4899] p-3 rounded-xl"><a href="">Explore Technologies</a></button>
                <button className="bg-[#E5E7EB] p-3 rounded-xl "><a href="">Learn More</a></button>
            </div>
            </div>
            <img src={logo} className="max-h-105"></img>
        </div>
    );
};

export default Banner;