import React from 'react';
import AddProductButton from '../button/AddProductButton';
import CardSeller from '../card/card';
// Redux


const AllCategory = (props) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
        <AddProductButton />
        <CardSeller/>
        <CardSeller/>
        <CardSeller/>
      </div>
    );
  };
  
export default AllCategory;