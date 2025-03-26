import { FaCode, FaRobot, FaServer, FaChartLine } from 'react-icons/fa';

const Introduction = () => {
  return (
    <section id="intro" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Profile Photo */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img 
            src="/images/profile-photo.jpg"
            alt="Profile" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = "/images/profile-photo.jpg" }}
          />
        </div>

        {/* Introduction Text */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Hi, I'm Abhijeet Singh Thakur
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            A passionate full-stack developer with expertise in building scalable web applications. 
            I thrive on solving complex problems and creating seamless user experiences. 
            Currently focused on AI integration in web applications and optimizing backend systems.
          </p>
          
          {/* Interests */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">My Interests</h2>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                <FaCode className="text-blue-500 text-xl" />
                <span>Web Development</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                <FaRobot className="text-purple-500 text-xl" />
                <span>AI/ML</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                <FaServer className="text-green-500 text-xl" />
                <span>DevOps</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                <FaChartLine className="text-orange-500 text-xl" />
                <span>Data Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;