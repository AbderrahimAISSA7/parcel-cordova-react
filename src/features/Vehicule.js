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
function Vehicule({roue, passagers}){
    if(roue < 2){
        throw new Error('Erreur de nombre de roues')
    }
    return (
        <div>
            <label>Nombre de roues</label>
            <span>{roue}</span>
            <label>Nombre de roues</label>
            <span>{nbPassager}</span>
        </div>
    )
}
 export default Vehicule;