import { use } from "react";
import type { Itecnology } from "../types/technologyType";
import CardStack from "./CardStack";
import { BrandColor } from "./Banner";
interface TechnologyProps{
    technologyPromise: Promise<Itecnology[]>
}

const TechnologyCard = ({technologyPromise}:TechnologyProps) => {
   const technology = use(technologyPromise);
    return (
        <div className="max-w-300 mx-auto px-5 lg:px-0">
            <h2 className=" text-3xl lg:text-4xl font-extrabold text-center lg:text-left">Explore the <span className={`text-transparent bg-clip-text ${BrandColor}`}>Technologies</span></h2>
            <p className="text-center lg:text-left">Pick one technology per category to build your ideal stack.</p>
            <CardStack technology={technology}/>
        </div>
    );
};

export default TechnologyCard;