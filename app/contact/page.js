'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/header';
import Footer from '@/components/Footer';

const initialFormData = {
  firstName: '',
  lastName: '',
  mobile: '',
  email: '',
  companyName: '',
  designation: '',
  location: '',
  country: 'India',
  enquiry: ''
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then(() => {
        setIsSubmitting(false);
        toast.success('Your enquiry has been submitted successfully!');
        setFormData(initialFormData);
      })
      .catch(() => {
        setIsSubmitting(false);
        toast.error('Failed to send your enquiry. Please try again later.');
      });
  };

  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-[url('https://tse4.mm.bing.net/th/id/OIP.zM0wVrIjDb95OByGi5DLdQHaD3?cb=iwp2&rs=1&pid=ImgDetMain')] bg-cover bg-center text-white py-16 px-4">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg max-w-2xl mx-auto">
              We’re happy to hear from you. Reach out with questions, feedback, or business inquiries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-10 bg-white/10 p-10 rounded-xl backdrop-blur-sm"
            >
              <ContactDetail
                title="Office and Plant"
                content="SWIFT LIFESCIENCES PVT LTD\nD-1 Sara Industrial Estate Ltd\nRampur, Dehradun - 248197\nUttarakhand, India"
              />
              <ContactDetail title="Phone" content="+91-135-2699975" />
              <ContactDetail title="Email" content="info@swiftlifesciences.com" />
              <ContactDetail title="Working Hours" content="Monday – Saturday: 9:00 AM – 5:00 PM\nSunday: Closed" />
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {['firstName', 'lastName', 'mobile', 'email', 'companyName', 'designation', 'location'].map((field, idx) => (
                  <InputField
                    key={idx}
                    label={capitalizeFirstLetter(field)}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required={field !== 'companyName' && field !== 'designation' && field !== 'location'}
                  />
                ))}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-3 border text-gray-700 border-gray-300 rounded-md"
                  >
                    <option>India</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">Write Your Enquiry</label>
                <textarea
                  rows="5"
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border text-gray-700 border-gray-300 rounded-md"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <Footer />
    </>
  );
}

function ContactDetail({ title, content }) {
  // Replace escaped newlines with actual newlines
  const formattedContent = content.replace(/\\n/g, '\n').split('\n').map((line, index, array) => (
    <span key={index}>
      {line}
      {/* Add a <br /> except after the last line */}
      {index < array.length - 1 && <br />}
    </span>
  ));

  return (
    <div>
      <h3 className="text-xl font-semibold mb-1 xl:mt-10">{title}</h3>
      <p>{formattedContent}</p>
    </div>
  );
}

function InputField({ label, name, value, onChange, required }) {
  return (
    <div>
      <label className="block text-gray-700 mb-2 font-medium">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-3 border text-gray-700 border-gray-300 rounded-md"
      />
    </div>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
