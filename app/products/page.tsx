'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCart } from '../context/CartContext'

const products = [
  { id: 1, name: 'Eco-Friendly Vape Pen', image: '/placeholder.svg', price: 19.99, flavor: 'Mint', nicotineStrength: '3mg', deviceType: 'Pen' },
  { id: 2, name: 'Organic Cotton Wicks', image: '/placeholder.svg', price: 5.99, flavor: 'N/A', nicotineStrength: 'N/A', deviceType: 'Accessory' },
  { id: 3, name: 'Recyclable Pod System', image: '/placeholder.svg', price: 29.99, flavor: 'Tobacco', nicotineStrength: '6mg', deviceType: 'Pod' },
  { id: 4, name: 'Biodegradable E-liquid Bottles', image: '/placeholder.svg', price: 14.99, flavor: 'Fruit Mix', nicotineStrength: '0mg', deviceType: 'E-liquid' },
  { id: 5, name: 'Refillable Tank', image: '/placeholder.svg', price: 24.99, flavor: 'N/A', nicotineStrength: 'N/A', deviceType: 'Tank' },
  { id: 6, name: 'Menthol E-liquid', image: '/placeholder.svg', price: 12.99, flavor: 'Menthol', nicotineStrength: '12mg', deviceType: 'E-liquid' },
]

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [sortOption, setSortOption] = useState('name')
  const [filters, setFilters] = useState({
    flavor: '',
    nicotineStrength: '',
    deviceType: '',
  })
  const { addToCart } = useCart()

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value)
  }

  const applyFilters = () => {
    let result = products
    if (filters.flavor) {
      result = result.filter(product => product.flavor === filters.flavor)
    }
    if (filters.nicotineStrength) {
      result = result.filter(product => product.nicotineStrength === filters.nicotineStrength)
    }
    if (filters.deviceType) {
      result = result.filter(product => product.deviceType === filters.deviceType)
    }
    result.sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name)
      } else if (sortOption === 'price_asc') {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    })
    setFilteredProducts(result)
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="mb-8 flex flex-wrap gap-4">
        <select
          name="flavor"
          onChange={handleFilterChange}
          className="border rounded px-2 py-1"
        >
          <option value="">All Flavors</option>
          <option value="Mint">Mint</option>
          <option value="Tobacco">Tobacco</option>
          <option value="Fruit Mix">Fruit Mix</option>
          <option value="Menthol">Menthol</option>
        </select>
        <select
          name="nicotineStrength"
          onChange={handleFilterChange}
          className="border rounded px-2 py-1"
        >
          <option value="">All Nicotine Strengths</option>
          <option value="0mg">0mg</option>
          <option value="3mg">3mg</option>
          <option value="6mg">6mg</option>
          <option value="12mg">12mg</option>
        </select>
        <select
          name="deviceType"
          onChange={handleFilterChange}
          className="border rounded px-2 py-1"
        >
          <option value="">All Device Types</option>
          <option value="Pen">Pen</option>
          <option value="Pod">Pod</option>
          <option value="Tank">Tank</option>
          <option value="E-liquid">E-liquid</option>
          <option value="Accessory">Accessory</option>
        </select>
        <select
          onChange={handleSortChange}
          className="border rounded px-2 py-1"
        >
          <option value="name">Sort by Name</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
        <button
          onClick={applyFilters}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Apply Filters
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Flavor: {product.flavor}</p>
              <p className="text-sm text-gray-500">Nicotine: {product.nicotineStrength}</p>
              <p className="text-sm text-gray-500">Type: {product.deviceType}</p>
              <div className="mt-4 flex items-center">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-16 px-2 py-1 border rounded mr-2"
                  id={`quantity-${product.id}`}
                />
                <button
                  onClick={() => {
                    const quantity = parseInt((document.getElementById(`quantity-${product.id}`) as HTMLInputElement).value)
                    addToCart(product, quantity)
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

