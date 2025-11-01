import React from "react";
import { Mail, Phone, MessageCircle, HelpCircle, Globe } from "lucide-react";

const HelpPage = () => {
  const faqs = [
    {
      question: "How can I cancel or modify my booking?",
      answer:
        "You can manage your booking from the ‘My Trips’ section. Select your trip and choose ‘Modify’ or ‘Cancel’. Charges may apply depending on airline or hotel policies.",
    },
    {
      question: "Where can I find my booking confirmation?",
      answer:
        "Once your booking is confirmed, you’ll receive an email and SMS confirmation. You can also view it in your account dashboard under ‘My Bookings’.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept all major credit/debit cards, UPI, net banking, and wallet payments. EMI options are also available for select bookings.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our 24x7 support team via chat, email, or phone. Scroll below for contact options.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-10">
      {/* 🧭 Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <HelpCircle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Need Help? We’re Here for You
        </h1>
        <p className="text-gray-600 text-lg">
          Get answers to frequently asked questions or reach out to our support team anytime.
        </p>
      </div>

      {/* 💬 FAQ Section */}
      <div className="max-w-4xl mx-auto space-y-6 mb-16">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* 📞 Contact Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <Mail className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h4>
          <p className="text-gray-600 mb-2">support@auravia.com</p>
          <a
            href="mailto:support@rauravia.com"
            className="text-yellow-600 font-medium hover:underline"
          >
            Send Mail →
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <Phone className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-gray-800 mb-1">Call Support</h4>
          <p className="text-gray-600 mb-2">1800-202-AURA(7626)</p>
          <a
            href="tel:18002027626"
            className="text-yellow-600 font-medium hover:underline"
          >
            Call Now →
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <MessageCircle className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-gray-800 mb-1">Live Chat</h4>
          <p className="text-gray-600 mb-2">Chat with our 24/7 assistant</p>
          <button className="bg-yellow-500 text-white px-5 py-2 rounded-full hover:bg-yellow-600 transition">
            Start Chat
          </button>
        </div>
      </div>

      {/* 🌍 Footer Note */}
      <div className="text-center mt-16">
        <Globe className="h-6 w-6 text-gray-500 mx-auto mb-2" />
        <p className="text-gray-500 text-sm">
          Auravia Support | Available 24/7 across 10+ countries 🌏
        </p>
      </div>
    </section>
  );
};

export default HelpPage;
