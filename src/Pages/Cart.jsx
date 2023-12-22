import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Carditem from '../Components/Carditem';



export default function Cart() {
  const { cart } = useSelector((state) => state);
  const [amount ,setamount]=useState(0);


  useEffect(()=>{setamount(cart.reduce( (acc,curr)=>acc+curr.price,0));
  },[cart])


  return (
    <div>
      {cart && cart.length > 0 ? (
        <div>

         {/* Cart left section which listed item  */}
          <div>
            {
              cart.map((singlecart, index) => (
                <Carditem key={singlecart.id} index={index} singlecart={singlecart} />
              ))
            }
          </div>
          
          {/* // cart right section which show total summary */}
          <div>
            <h2>My cart summary</h2>
            <span>Total Item : {cart.length}</span>
            <span>total Amount : {amount}</span>
            <button>CheckOut Now</button>

          </div>
        </div>
      )
        :
        (
          <div>
            <h1>Your cart is empty</h1>
            <Link to={"/"}>
              <button>Shop Now</button>
            </Link>


          </div>
        )}
    </div>
  );
}
