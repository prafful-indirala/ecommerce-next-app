export default function FAQ() {
  const faqs = [
    {
      question: "What are your minimum order quantities?",
      answer: "Our minimum order quantity varies by product. Generally, we require a minimum order of $500 for most items. Please contact our sales team for specific product MOQs."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to many countries. Shipping rates and times vary depending on the destination. Please contact us for a shipping quote to your location."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and bank transfers for domestic orders. For international orders, we primarily use bank transfers or PayPal."
    },
    {
      question: "How long does shipping usually take?",
      answer: "Domestic shipping typically takes 3-5 business days. International shipping can take 7-14 business days, depending on the destination and customs processing times."
    },
    {
      question: "Do you offer product samples?",
      answer: "Yes, we offer product samples for qualified retailers. Please contact our sales team to request samples. Note that there may be a charge for some sample requests."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns for defective products within 30 days of delivery. Please contact our customer service team to initiate a return. Note that shipping costs for returns are the responsibility of the buyer unless the product is defective."
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

