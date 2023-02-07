import React from 'react';

// class Vehicule extends React.Component {
//  render() {
//    return (
//     <div>
//         <p>Roues: {this.roues}</p>
//          <p>Nombre de passagers: {this.passagers}</p>
//       </div>
//     );
//    }
// }
function Vehicule({nbRoue, passagers}){
    if(nbRoue < 2){
        throw new Error('Erreur de nombre de roues')
    }
    return (
        <div>
            <label>Nombre de roues</label>
            <span>{nbRoue}</span>
            <label>Nombre de roues</label>
            <span>{passagers}</span>
        </div>
    )
}
 export default Vehicule;