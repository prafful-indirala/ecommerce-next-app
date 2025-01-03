import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ImageSlider from './components/ImageSlider'

const sliderImages = [
  { src: '/placeholder.svg', alt: 'Vape product 1' },
  { src: '/placeholder.svg', alt: 'Vape product 2' },
  { src: '/placeholder.svg', alt: 'Vape product 3' },
]

const featuredProducts = [
  { id: 1, name: 'Eco-Friendly Vape Pen', image: '/placeholder.svg', price: 19.99 },
  { id: 2, name: 'Organic Cotton Wicks', image: '/placeholder.svg', price: 5.99 },
  { id: 3, name: 'Recyclable Pod System', image: '/placeholder.svg', price: 29.99 },
  { id: 4, name: 'Biodegradable E-liquid Bottles', image: '/placeholder.svg', price: 14.99 },
]

const newArrivals = [
  { id: 5, name: 'Premium Vape Mod', image: '/placeholder.svg', price: 79.99 },
  { id: 6, name: 'Flavor-Burst E-Liquid', image: '/placeholder.svg', price: 24.99 },
  { id: 7, name: 'Ultra-Slim Vape Pen', image: '/placeholder.svg', price: 39.99 },
  { id: 8, name: 'Ceramic Coil Pack', image: '/placeholder.svg', price: 12.99 },
]

const topDeals = [
  { id: 9, name: 'Clearance Vape Starter Kit', image: '/placeholder.svg', price: 15.99, originalPrice: 29.99 },
  { id: 10, name: 'Bulk E-Liquid Pack', image: '/placeholder.svg', price: 49.99, originalPrice: 69.99 },
  { id: 11, name: 'Last Season Mod', image: '/placeholder.svg', price: 34.99, originalPrice: 59.99 },
]

const bestSellers = [
  { id: 12, name: 'Classic Tobacco E-Liquid', image: '/placeholder.svg', price: 17.99 },
  { id: 13, name: 'All-Day Vape Device', image: '/placeholder.svg', price: 44.99 },
  { id: 14, name: 'Menthol Crush Pods', image: '/placeholder.svg', price: 22.99 },
  { id: 15, name: 'Flavor Sampler Pack', image: '/placeholder.svg', price: 29.99 },
]

const brands = [
  { id: 1, name: 'VapeMaster', logo: '/placeholder.svg' },
  { id: 2, name: 'CloudChaser', logo: '/placeholder.svg' },
  { id: 3, name: 'PureVape', logo: '/placeholder.svg' },
  { id: 4, name: 'EcoSmoke', logo: '/placeholder.svg' },
  { id: 5, name: 'FlavorFusion', logo: '/placeholder.svg' },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to VapeWholesale</h1>
        <p className="text-xl text-center mb-12 text-gray-600">Your trusted source for premium, eco-friendly vaping products</p>

        <div className="mb-12">
          <ImageSlider images={sliderImages} />
        </div>

        <div className="bg-green-100 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Our Commitment to Sustainability</h2>
          <p className="text-gray-700">At VapeWholesale, we're dedicated to providing high-quality vaping products while minimizing our environmental impact. Discover our range of eco-friendly options and join us in our mission for a greener future.</p>
        </div>

        {/* EXCLUSIVE COLLECTIONS */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Exclusive Collections</h2>
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

        {/* NEW ARRIVALS */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">New Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                  <Link href={`/products/${product.id}`} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TOP DEALS */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Top Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topDeals.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-4">
                    <p className="text-green-600 font-bold mr-2">${product.price.toFixed(2)}</p>
                    <p className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
                  </div>
                  <Link href={`/products/${product.id}`} className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                    Get This Deal
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUR BEST SELLING PRODUCTS */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Best Selling Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                  <Link href={`/products/${product.id}`} className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition duration-300">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUR BRANDS */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {brands.map((brand) => (
              <div key={brand.id} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
                <Image src={brand.logo} alt={brand.name} width={150} height={150} className="max-w-full h-auto" />
              </div>
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Stay updated with our latest products, deals, and industry news.</p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center"
            >
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>
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
      </section>
    </div>
  )
}

