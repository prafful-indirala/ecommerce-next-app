'use client'

import { useCart } from '../context/CartContext'
import Link from 'next/link'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 px-2 py-1 border rounded mr-2"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-8 text-right">
              <p className="text-xl font-semibold">Total: ${getCartTotal().toFixed(2)}</p>
            </div>
          </div>
          <div className="text-right">
            <Link href="/checkout" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

