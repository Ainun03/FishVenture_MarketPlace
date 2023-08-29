import React, { Fragment } from 'react';
import AddKolamButton from '../button/AddKolamButton';
import CardKolam from '../card/cardKolam';
// Redux
// Redux
import { useDispatch, useSelector } from 'react-redux';


const AllKolam = (props) => {
  const { kolam } = useSelector(
    (store) => store.seller
  );

    return (
      <Fragment>

        <div className="grid grid-cols-2 px-3 md:grid-cols-3 gap-2">
          {/* <AddKolamButton /> */}
          {kolam.length > 0 && kolam.map(item => <CardKolam key={item.id} seller={item} />)}
        </div>
      </Fragment>
    );
  };
  
export default AllKolam;