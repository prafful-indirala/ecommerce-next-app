'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const { user, logout } = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="text-gray-600 hover:text-green-800" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-gray-600 hover:text-green-800" onClick={onClose}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-green-800" onClick={onClose}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-green-800" onClick={onClose}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-gray-600 hover:text-green-800" onClick={onClose}>
              FAQs
            </Link>
          </li>
          <li>
            <Link href="/cart" className="text-gray-600 hover:text-green-800" onClick={onClose}>
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t">
        {user ? (
          <>
            <p className="text-gray-600 mb-2">Welcome, {user.email}</p>
            <button
              onClick={() => {
                logout()
                onClose()
              }}
              className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="block w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 text-center mb-2"
              onClick={onClose}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 text-center"
              onClick={onClose}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

