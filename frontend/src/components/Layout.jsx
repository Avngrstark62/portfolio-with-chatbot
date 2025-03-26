import { useState } from 'react';
import { FiMenu, FiX, FiMail, FiUser, FiCode, FiFileText, FiFolder } from 'react-icons/fi';
import Chatbot from './Chatbot';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleChatbot = () => setIsChatbotOpen(!isChatbotOpen);

  const navItems = [
    { id: 'intro', label: 'Introduction', icon: <FiUser className="mr-2" /> },
    { id: 'skills', label: 'Skills', icon: <FiCode className="mr-2" /> },
    { id: 'resume', label: 'Resume', icon: <FiFileText className="mr-2" /> },
    { id: 'contact', label: 'Contact', icon: <FiMail className="mr-2" /> },
    { id: 'projects', label: 'Projects', icon: <FiFolder className="mr-2" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Abhijeet's Portfolio
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`/${item.id}`} 
                className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-2 flex flex-col">
              {navItems.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className="flex items-center px-3 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} Abhijeet's Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/abhijeet-s-thakur" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              LinkedIn
            </a>
            <a href="https://x.com/abhijeetst22" className="text-gray-600 hover:text-blue-400 transition-colors duration-200">
              Twitter
            </a>
            <a href="https://github.com/Avngrstark62" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* Chatbot Floating Button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none"
        aria-label="Open chatbot"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Chatbot Panel */}
      {isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />}
    </div>
  );
};

export default Layout;

// import { useState, useEffect } from 'react';
// import { Outlet, Link, useLocation } from 'react-router-dom';
// import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';

// const Layout = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('introduction');
//   const location = useLocation();

//   // Close mobile menu when a link is clicked
//   const handleNavClick = () => {
//     if (isMenuOpen) setIsMenuOpen(false);
//   };

//   // Update active section based on URL
//   useEffect(() => {
//     const path = location.pathname.substring(1);
//     if (path) setActiveSection(path);
//   }, [location]);

//   // Smooth scroll for anchor links
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 flex flex-col">
//       {/* Header/Navigation */}
//       <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           {/* Logo/Brand */}
//           <Link 
//             to="/" 
//             className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//             onClick={() => {
//               setActiveSection('introduction');
//               handleNavClick();
//             }}
//           >
//             MyPortfolio
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {['introduction', 'skills', 'resume', 'contact'].map((item) => (
//               <Link
//                 key={item}
//                 to={`/${item}`}
//                 className={`capitalize font-medium transition-colors duration-300 hover:text-blue-600 ${
//                   activeSection === item ? 'text-blue-600' : 'text-gray-700'
//                 }`}
//                 onClick={() => {
//                   setActiveSection(item);
//                   scrollToSection(item);
//                 }}
//               >
//                 {item}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden text-gray-700 focus:outline-none"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-200">
//             <nav className="flex flex-col space-y-3 px-4 py-4">
//               {['introduction', 'skills', 'resume', 'contact'].map((item) => (
//                 <Link
//                   key={item}
//                   to={`/${item}`}
//                   className={`capitalize font-medium py-2 px-4 rounded-lg transition-colors duration-300 ${
//                     activeSection === item
//                       ? 'bg-blue-50 text-blue-600'
//                       : 'text-gray-700 hover:bg-gray-100'
//                   }`}
//                   onClick={() => {
//                     setActiveSection(item);
//                     handleNavClick();
//                     scrollToSection(item);
//                   }}
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <footer className="bg-white border-t border-gray-200 py-8">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <p className="text-gray-600">
//                 &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
//               </p>
//             </div>
//             <div className="flex space-x-6">
//               <a
//                 href="https://github.com/yourusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
//                 aria-label="GitHub"
//               >
//                 <FiGithub size={20} />
//               </a>
//               <a
//                 href="https://linkedin.com/in/yourusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
//                 aria-label="LinkedIn"
//               >
//                 <FiLinkedin size={20} />
//               </a>
//               <a
//                 href="mailto:youremail@example.com"
//                 className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
//                 aria-label="Email"
//               >
//                 <FiMail size={20} />
//               </a>
//               <a
//                 href="/resume.pdf"
//                 download
//                 className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
//                 aria-label="Download Resume"
//               >
//                 <FiFileText size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Layout;

// import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Layout = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <nav className="bg-gray-900 text-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold">My Portfolio</Link>
//           <div className="hidden md:flex gap-6">
//             <Link to="/" className="hover:text-gray-400">Home</Link>
//             <Link to="/skills" className="hover:text-gray-400">Skills</Link>
//             <Link to="/resume" className="hover:text-gray-400">Resume</Link>
//             <Link to="/contact" className="hover:text-gray-400">Contact</Link>
//           </div>
//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden flex flex-col gap-4 p-4 bg-gray-800">
//             <Link to="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
//             <Link to="/skills" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Skills</Link>
//             <Link to="/resume" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Resume</Link>
//             <Link to="/contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>
//           </div>
//         )}
//       </nav>

//       {/* Main Content */}
//       <main className="flex-grow container mx-auto p-4">
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-400 text-center p-4">
//         &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default Layout;