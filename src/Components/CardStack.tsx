import { FcRating } from "react-icons/fc";
import type { Itecnology } from "../types/technologyType";


const CardStack = ({ technology }) => {

    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-9">
                <div className="grid grid-cols-3 gap-6">
                    {
                        technology.map((tech: Itecnology) => {
                            return (
                                <div className="card bg-base-100 my-3  shadow-sm">
                                    
                                    <div className="card-body">
                                        <div className="flex justify-between items-center">
                                        <img src={tech.icon}></img>
                                        <h2 className="p-2 m-2 rounded-2xl bg-[#E0F2FE]">{tech.badge}</h2>
                                    </div>
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
                                                <div className="flex items-center gap-2">
                                                    <div><img src="/public/Container.png"></img></div>
                                                    <div>{tech.rating}</div></div>
                                            </div>
                                        </div>
                                        <button className="bg-[#0A0F1D] text-[#FFFFFF] p-3 rounded-xl">Add to Stack</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="col-span-3">
                <div className="card bg-base-100  shadow-sm">

                    <div className="card-body">
                        <h2 className="card-title font-extrabold">
                            Your Stack
                        </h2>
                        <div>
                            <p>No technologies selected yet.</p>
                        </div>
                    </div>
                    <div className="rounded-xl mx-auto p-8 my-3 border-[#E2E8F0] border-dotted border">
                        <p>Your stack is empty.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardStack;