'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { ShoppingCart, Menu } from 'lucide-react'
import SideMenu from './SideMenu'

export default function Header() {
  const { user, logout } = useAuth()
  const { cart } = useCart()
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              className="text-gray-600 hover:text-green-800 mr-4 lg:hidden"
              onClick={() => setIsSideMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <Link href="/" className="text-2xl font-bold text-green-800">
              VapeWholesale
            </Link>
          </div>
          <ul className="hidden lg:flex space-x-4 items-center">
            <li>
              <Link href="/products" className="text-gray-600 hover:text-green-800">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-green-800">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-green-800">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-600 hover:text-green-800">
                FAQs
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-600 hover:text-green-800 relative">
              <ShoppingCart />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            {user ? (
              <div className="hidden lg:block">
                <span className="text-gray-600 mr-2">Welcome, {user.email}</span>
                <button
                  onClick={logout}
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden lg:block space-x-2">
                <Link
                  href="/login"
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
    </header>
  )
}

