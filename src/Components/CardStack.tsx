import { FcRating } from "react-icons/fc";
import type { Itecnology } from "../types/technologyType";
import { FaReact } from "react-icons/fa";


const CardStack = ({ technology }) => {

    return (
        <div>
            {
                technology.map((tech: Itecnology) => {
                    return (
                        <div className="card bg-base-100 my-3 w-80 shadow-sm">
                            <div className="flex justify-between items-center">
                            <FaReact className="max-w-100 max-h-20" />
                            <h2 className="p-2 m-2 rounded-2xl bg-[#E0F2FE]">{tech.badge}</h2>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title font-extrabold">{tech.name}</h2>
                                <p>{tech.description}</p>
                                <div className="flex justify-between my-4 items-center">
                                    <div>
                                   <p className="text-[#475569] bg-[#F1F5F9] p-1.5 rounded-xl">{tech.category}</p>
                                   </div>
                                   <div>
                                   <p className="">{tech.difficulty}</p>
                                   </div>
                                   <div>
                                   <p className="flex items-center gap-2"><div><FcRating/></div><div>{tech.rating}</div></p>
                                   </div>
                                </div>
                                <button className="bg-[#0A0F1D] text-[#FFFFFF] p-3 rounded-xl">Add to Stack</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CardStack;