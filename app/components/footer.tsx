export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">VapeWholesale</h3>
            <p>Your trusted source for premium, eco-friendly vaping products.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/products" className="hover:text-green-300">Products</a></li>
              <li><a href="/about" className="hover:text-green-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-green-300">Contact</a></li>
              <li><a href="/faq" className="hover:text-green-300">FAQs</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p>Email: info@vapewholesale.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} VapeWholesale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

