import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const whatsappLink = 'https://wa.me/+1234567890'; // Replace with your WhatsApp number
  
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
