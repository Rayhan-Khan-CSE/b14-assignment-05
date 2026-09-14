import { use } from "react";
import type { Itecnology } from "../types/technologyType";
import CardStack from "./CardStack";

interface TechnologyProps{
    technologyPromise: Promise<Itecnology[]>
}

const TechnologyCard = ({technologyPromise}:TechnologyProps) => {
   const technology = use(technologyPromise);
    return (
        <div className="max-w-300 mx-auto">
            <h2 className=" text-4xl font-extrabold">Explore the <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#8B5CF6]">Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
            <CardStack technology={technology}/>
        </div>
    );
};

export default TechnologyCard;