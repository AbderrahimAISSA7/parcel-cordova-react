import { useEffect, useState } from "react";
import Vehicule from "./features/Vehicule";

function App() {
    const test = 'Yess';
    function changeName(){
        test = 'toto';
        console.log(test);
    }


  
    const [nbRoue, setNbRoue] = useState(4);
    const changeNbRoue = () => setNbRoue(nbRoue + 1);
    return (
       <div style={{width : "300px", margin : 'auto', marginTop : '20px'}}>
           <Vehicule roue={nbRoue} nbPassager={2}/>
           <button onClick={changeNbRoue}>Ajoute une roue</button>
       </div>
    )

}

export default App;