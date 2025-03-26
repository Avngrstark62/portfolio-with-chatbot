import { FiDownload } from 'react-icons/fi';

const Resume = () => {
  const handleDownload = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'abhijeet_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Resume
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Here's a quick overview of my professional journey. Download my full resume to see my complete experience, education, and achievements.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
            <h3 className="text-xl font-semibold mb-4">Highlights</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>X years of experience in full-stack development</li>
              <li>Bachelor's degree in Computer Science</li>
              <li>Certified in AWS Cloud Practitioner</li>
              <li>Open source contributor</li>
            </ul>
          </div>
          
          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto hover:shadow-lg transition-all duration-300"
          >
            <FiDownload className="text-xl hover:cursor-pointer" />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;