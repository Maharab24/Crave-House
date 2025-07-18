import React, { useEffect, useState } from 'react'
import Cart from './Cart';

function Carts() {

    const [carts, setCarts] = useState([]);

       useEffect(() => {
      const fetchCarts = async () => {
        try {
          const res = await fetch('/public/restaurant_recipes.json');
          const data = await res.json();

          setCarts(data);
        } catch (err) {
          console.error('Error fetching carts:', err);
        }
      };

      fetchCarts();
    }, []);


  return (
    <>

    {
        carts.map((cart, index) => (
        <Cart key={index} recipe={cart} />
        ))

    }

    </>
  )
}

export default Carts