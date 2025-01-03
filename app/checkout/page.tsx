'use client'

import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useRouter } from 'next/navigation'

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the order data to your backend
    console.log('Order submitted:', { ...formData, cart, total: getCartTotal() })
    alert('Thank you for your order! We will process it shortly.')
    clearCart()
    router.push('/')
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="text-xl font-semibold mt-4 text-right">
            Total: ${getCartTotal().toFixed(2)}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="address" className="block mb-1">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="city" className="block mb-1">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="country" className="block mb-1">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block mb-1">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

