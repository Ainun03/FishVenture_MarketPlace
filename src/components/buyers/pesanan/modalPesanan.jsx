import React,{Fragment,} from "react";
import { useNavigate, useParams } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';

function ModalPesanan({price, stok}){
    const { id } = useParams();
    const navigate = useNavigate();
	const dispatch = useDispatch();

    // const { pondBuyer,getBudidayaBuyer } = useSelector(
    //     (store) => store.buyer
    // );

    // const item=getBudidayaBuyer.find((i) => i.id === id)
    // const price = item.priceList

    // console.log(price,stok)
    // const item=price

    return(
        <Fragment>
            <div className='modal-body'>
                <div className="flex  gap-4">
                    <div>
                        <img className='w-[100px] h-[100px] rounded-md' src="/assets/images/nyet.jpg" alt='profile' />
                    </div>
                    <div className='price w-full mb-4'>
                        {price.length > 0 && price.map(item => 
                            <div className=" flex text-lg justify-between w-full font-bold text-[#A2DBFA]">
                                <div>
                                    <p className="font-bold">Harga Per- <span className="text-[#053742]">{item ? item.limit :"limit"}</span> kg</p>
                                </div>
                                <div className="">
                                    <h3 className=' '>{
                                        // item ? item.price :"harga"
                                        price ? new Intl.NumberFormat('id-ID',
                                            { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                        ).format(item.price) : 'Free'
                                    }</h3>
                                </div>
                            </div>
                                // <Cardbuyer key={item.id} buyer={item} />
                            )}
                            <p className="text-gray-500 text-md font-semibold italic" >stok: {stok ? stok : "stok"}</p>
                    </div>
                </div>
                <div className="flex justify-between tex-md font-semibold pb-4 w-full">
                    <div className="">
                        <p>Jumlah</p>
                    </div>
                    <div className="">
                    <p>Jumlah</p>
                    </div>
                </div>

                <button className='rounded-2xl bg-primary hover:bg-[#7126B5CC] w-full py-3 text-white text-sm font-medium'>
                    Kirim
                </button>
            </div> 

        </Fragment>
    )
}
export default ModalPesanan