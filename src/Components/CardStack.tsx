
import { useState } from "react";
import type { Itecnology } from "../types/technologyType";
import { Bounce, toast } from "react-toastify";
interface CardStackProps {
    technology: Itecnology[];
}

const CardStack = ({ technology }: CardStackProps) => {
    const [selected, setSelected] = useState<Itecnology[]>([]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="col-span-1 md:col-span-9">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {
                        technology.map((tech: Itecnology) => {
                            return (
                                <div key={tech.id} className="card bg-base-100 my-2 md:my-3  shadow-sm">

                                    <div className="card-body p-4 md:p-6">
                                        <div className="flex justify-between items-center">
                                            <img src={tech.icon}></img>
                                            <h2 className="p-2 m-2 rounded-2xl bg-[#E0F2FE]">{tech.badge}</h2>
                                        </div>
                                        <h2 className="card-title font-extrabold">{tech.name}</h2>
                                        <p>{tech.description}</p>
                                        <div className="flex justify-between gap-2 my-4 items-center text-sm">
                                            <div>
                                                <p className="text-[#475569] bg-[#F1F5F9] p-1.5 rounded-xl">{tech.category}</p>
                                            </div>
                                            <div>
                                                <p className="">{tech.difficulty}</p>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <div><img className="items-center" src="/Container.png"></img></div>
                                                    <div className="items-center">{tech.rating}</div></div>
                                            </div>
                                        </div>
                                        <div>
                                            <button onClick={() => {
                                                setSelected([...selected, tech]);
                                                toast.success(`${tech.name} is added successfully to your stack.`, {
                                                    position: "bottom-right",
                                                    autoClose: 5000,
                                                    hideProgressBar: false,
                                                    closeOnClick: false,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "light",
                                                    transition: Bounce,
                                                });
                                            }}
                                                className="bg-[#0A0F1D] text-[#FFFFFF] p-3 rounded-xl w-full" disabled={selected.some(element => element.id === tech.id)}>
                                                {selected.some(element => element.id === tech.id) ? "Selected" : "Add to Stack"}</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="col-span-1 md:col-span-3">
                <div className="card bg-base-100  shadow-sm">

                    <div className="card-body">
                        <h2 className="text-2xl font-extrabold">
                            Your Stack
                        </h2>
                        <div>
                            <p className="text-lg">{selected.length === 0 ? "No technologies selected yet" : `${selected.length} technologies selected`}</p>
                        </div>
                    </div>
                    <div className="my-3 mx-4">
                        {selected.length === 0 ? (<div className="rounded-xl mx-auto p-8 my-3 border-[#E2E8F0] border-dotted border"><p>Your stack is empty.</p></div>) : (<div className="space-y-2">
                            {selected.map(element => (
                                <div key={element.id} className="border-[#E2E8F0] border-0.5 flex justify-between border mx-4 p-3 rounded-xl items-center">
                                    <div className="flex">
                                        <img className="m-1" src={element.icon}></img>
                                        <div>
                                            <div className="font-bold">{element.name}</div>
                                            <div className="text-[12px]">{element.category}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => {
                                            setSelected(selected.filter(tech => tech.id !== element.id));
                                            toast.error(`${element.name} is removed to your stack`, {
                                                position: "bottom-right",
                                                autoClose: 5000,
                                                hideProgressBar: false,
                                                closeOnClick: false,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                                theme: "light",
                                                transition: Bounce,
                                            });
                                        }
                                        } ><img className="h-10 w-10" src="/xmark.png"></img></button></div>
                                </div>
                            ))}
                        </div>
                        )}
                    </div>
                    {
                        selected.length > 0 && (<button onClick={() => {setSelected([])
                            toast.error(`Remove all to your stack`, {
                                                position: "bottom-right",
                                                autoClose: 5000,
                                                hideProgressBar: false,
                                                closeOnClick: false,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                                theme: "light",
                                                transition: Bounce,
                                            });
                                        }
                        }
                            className="border-[#ED8C85] text-[#D82C20] text-xl rounded-2xl font-extrabold border mx-4 my-4 p-3 ">Remove All</button>)
                    }

                </div>
            </div>
        </div >
    );
};

export default CardStack;