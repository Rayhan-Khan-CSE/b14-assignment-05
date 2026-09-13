import { use } from "react";


const TechnologyCard = ({technologyPromise}) => {
   const technology = use(technologyPromise);
   console.log(technology);
    return (
        <div>
            
        </div>
    );
};

export default TechnologyCard;