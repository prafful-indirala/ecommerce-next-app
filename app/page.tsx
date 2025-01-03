import Image from 'next/image'
import Link from 'next/link'

const featuredProducts = [
  { id: 1, name: 'Eco-Friendly Vape Pen', image: '/placeholder.svg', price: 19.99 },
  { id: 2, name: 'Organic Cotton Wicks', image: '/placeholder.svg', price: 5.99 },
  { id: 3, name: 'Recyclable Pod System', image: '/placeholder.svg', price: 29.99 },
  { id: 4, name: 'Biodegradable E-liquid Bottles', image: '/placeholder.svg', price: 14.99 },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to VapeWholesale</h1>
        <p className="text-xl text-center mb-12 text-gray-600">Your trusted source for premium, eco-friendly vaping products</p>
        
        <div className="bg-green-100 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Our Commitment to Sustainability</h2>
          <p className="text-gray-700">At VapeWholesale, we're dedicated to providing high-quality vaping products while minimizing our environmental impact. Discover our range of eco-friendly options and join us in our mission for a greener future.</p>
        </div>

        <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <Link href={`/products/${product.id}`} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-12 rounded-lg mt-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Are you a retailer?</h2>
          <p className="text-xl text-gray-600 mb-8">Join our network and get access to wholesale prices and exclusive deals.</p>
          <Link href="/register" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  )
}

