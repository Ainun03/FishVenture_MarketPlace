import React from 'react';
import AddProductButton from '../button/AddProductButton';
import Cardbuyer from '../../buyers/card';
// Redux


const AllCategory = (props) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        <AddProductButton />
            {/* <Cardbuyer/> */}
      </div>
    );
  };
  
  export default AllCategory;