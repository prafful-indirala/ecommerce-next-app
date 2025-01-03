export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">About VapeWholesale</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            At VapeWholesale, we're committed to providing high-quality, eco-friendly vaping products to retailers worldwide. Our mission is to promote responsible vaping while minimizing our environmental impact.
          </p>
          <p className="mb-4">
            We believe in the power of innovation and sustainability in the vaping industry. That's why we carefully curate our product selection to include the most advanced, environmentally conscious options available in the market.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Quality: We source only the best products from reputable manufacturers.</li>
            <li>Sustainability: We prioritize eco-friendly options and packaging.</li>
            <li>Innovation: We stay at the forefront of vaping technology.</li>
            <li>Responsibility: We promote safe and responsible vaping practices.</li>
            <li>Customer Service: We provide exceptional support to our retail partners.</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          Founded in 2015, VapeWholesale started as a small operation with a big vision. We saw the growing demand for vaping products and recognized the need for a wholesale supplier that prioritized both quality and environmental responsibility.
        </p>
        <p className="mb-4">
          Over the years, we've grown into a leading wholesaler in the industry, serving thousands of retailers across the country. Our success is built on our commitment to our values and our dedication to our retail partners.
        </p>
        <p>
          Today, we continue to expand our product line and improve our services, always with an eye towards a greener, more sustainable future for the vaping industry.
        </p>
      </div>
    </div>
  )
}

