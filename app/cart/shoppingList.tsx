'use client';

import { useState } from 'react';
import { Product } from '../product-data';
import Link from 'next/link';
export const dynamic ='force-dynamic'

export default function ShoppingCartList({ initialCartProducts }: { initialCartProducts: Product[] }) {
    const [cartProducts,setCartProducts] = useState(initialCartProducts); 
    async function removeFromCart(productId:string){
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/user/1/cart',{
      method:'DELETE',
      body:JSON.stringify({productId}),
      headers:{
        'Content-type':'application/json'
      }
    })
    const updatedCart=await response.json();
    setCartProducts(updatedCart);

  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <ul className="space-y-4"> {/* List for cart items */}
        {cartProducts.map(product => (
          <li key={product.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
            <Link href={`/products/${product.id}`}>
            <div className='flex justify-between'>
                <div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
               <p className="text-gray-600">${product.price}</p>

                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e)=>{e.preventDefault(),removeFromCart(product.id)}}>Remove from cart</button>

            </div>
             
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}