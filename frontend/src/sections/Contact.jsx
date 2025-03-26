import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaClock } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    }

    setIsSending(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-all duration-300 ${
                  isSending ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <FiSend />
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-blue-500 text-xl" />
                  <a href="mailto:thakurabhijeetsingh79@gmail.com" className="text-gray-700 hover:text-blue-600">
                    thakurabhijeetsingh79@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaGithub className="text-gray-800 text-xl" />
                  <a href="https://github.com/Avngrstark62" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                    Avngrstark62
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-blue-700 text-xl" />
                  <a href="https://www.linkedin.com/in/abhijeet-s-thakur/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                    Abhijeet Singh Thakur
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-6">Availability</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="font-medium">Open to both full-time and part-time opportunities</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaClock className="text-blue-500 text-xl" />
                  <span>Time Zone: IST (UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaClock className="text-blue-500 text-xl" />
                  <span>Typical response time: 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import { useState } from 'react';
// import { FaGithub, FaLinkedin, FaEnvelope, FaClock } from 'react-icons/fa';
// import { FiSend } from 'react-icons/fi';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Message sent successfully!');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="py-16 px-4 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//           Get In Touch
//         </h2>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="bg-white p-8 rounded-xl shadow-md">
//             <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 ></textarea>
//               </div>
              
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-all duration-300"
//               >
//                 <FiSend />
//                 Send Message
//               </button>
//             </form>
//           </div>
          
//           {/* Contact Info */}
//           <div className="space-y-8">
//             <div className="bg-white p-8 rounded-xl shadow-md">
//               <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-4">
//                   <FaEnvelope className="text-blue-500 text-xl" />
//                   <a href="mailto:thakurabhijeetsingh79@gmail.com" className="text-gray-700 hover:text-blue-600">
//                     thakurabhijeetsingh79@gmail.com
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <FaGithub className="text-gray-800 text-xl" />
//                   <a href="https://github.com/Avngrstark62" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
//                     Avngrstark62
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <FaLinkedin className="text-blue-700 text-xl" />
//                   <a href="https://www.linkedin.com/in/abhijeet-s-thakur/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
//                     Abhijeet Singh Thakur
//                   </a>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-8 rounded-xl shadow-md">
//               <h3 className="text-xl font-semibold mb-6">Availability</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-4">
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   <span className="font-medium">Open to both full-time and part-time opportunities</span>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <FaClock className="text-blue-500 text-xl" />
//                   <span>Time Zone: IST (UTC+5:30)</span>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <FaClock className="text-blue-500 text-xl" />
//                   <span>Typical response time: 24 hours</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;