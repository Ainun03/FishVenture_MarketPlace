import React from 'react';
import AddProductButton from '../button/AddProductButton';
import CardSeller from '../card/card';
// Redux
import { useDispatch, useSelector } from 'react-redux';


const AllCategory = (props) => {

  const { kolam } = useSelector(
    (store) => store.seller
);

    return (
      <div className="grid grid-cols-2 pl-4 md:grid-cols-3 gap-5">
        {/* <AddProductButton /> */}

        {kolam.length > 0 && kolam.map(item => <CardSeller key={item.id} kolam={item} />)}
      </div>
    );
  };
  
export default AllCategory;