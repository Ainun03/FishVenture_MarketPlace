import React from 'react';
import AddKolamButton from '../button/AddKolamButton';
import CardKolam from '../card/cardKolam';
// Redux


const AllKolam = (props) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
        <AddKolamButton />
        <CardKolam/>
        <CardKolam/>
        <CardKolam/>
      </div>
    );
  };
  
export default AllKolam;