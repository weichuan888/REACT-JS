import React, { Component } from 'react';

// export default class Etablishments extends Component {
//   render() {
//     return (
//       <div className="etablishments">
//         <h3 {this.prop.etablishments.name}</h3>
//         {this.props.etablishments.description}
//       </div>
//     );
//   }
// }


// autre maniere plus simple a ecrire
const Etablishments = ( {etablishments}) => {
  return(
    <div className='etablishments'>
      <h3>{etablishments.name}</h3>
      {etablishments.description}
    </div>
  );
}
export default Etablishments;
