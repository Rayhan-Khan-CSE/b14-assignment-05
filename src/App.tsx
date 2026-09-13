import { Suspense } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import TechnologyCard from "./Components/TechnologyCard";
import type { Itecnology } from "./types/technologyType";

const technologyFetch = async ():Promise<Itecnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}
function App() {
  const technologyPromise = technologyFetch();
  return (
    <>
     <Nav/>
     <Banner/>
     <Suspense fallback={<h2>Waiting</h2>}>
     <TechnologyCard technologyPromise={technologyPromise}/>
     </Suspense>
    </>
  )
}

export default App
