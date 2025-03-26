import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaRobot } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiDocker, SiMongodb, SiFlask, SiFastapi, SiPython, SiReact, SiStreamlit, SiJavascript, SiPandas, SiNginx } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const iconMap = {
    web_dev: <FaCode className="text-blue-500" />,
    // backend: <FaServer className="text-green-500" />,
    ai: <FaRobot className="text-purple-500" />,
  };

  const techIcons = {
    'TypeScript': <SiTypescript className="text-blue-600" />,
    'JavaScript': <SiJavascript className="text-yellow-400" />,
    'React': <SiReact className="text-blue-500" />,
    'Next.js': <SiNextdotjs />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-500" />,
    'Node.js': <SiNodedotjs className="text-green-600" />,
    'Express': <SiExpress />,
    'PostgreSQL': <SiPostgresql className="text-blue-700" />,
    'MongoDB': <SiMongodb className="text-green-500" />,
    'Docker': <SiDocker className="text-blue-400" />,
    'AWS': <FaAws className="text-orange-500" />,
    'Pandas': <SiPandas className="text-orange-600" />,
    'Flask': <SiFlask className="text-gray-700" />,
    'FastAPI': <SiFastapi className="text-teal-600" />,
    'Python': <SiPython className="text-yellow-500" />,
    'Streamlit': <SiStreamlit className="text-red-500" />,
    'Socket.io': <SiJavascript className="text-black" />,
    'Nginx': <SiNginx className="text-black" />,
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
            {project.category === 'webdev' ? 'Web Dev' : 'AI/ML'}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <FaCode className="text-gray-500" />
            <span>Tech Stack</span>
          </h4>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <div key={tech} className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                {techIcons[tech] || <FaCode className="text-gray-500" />}
                <span className="text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        
        {project.keyFeatures && (
          <div className="mb-4">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <FaServer className="text-gray-500" />
              <span>Key Features</span>
            </h4>
            <ul className="space-y-1 text-sm">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-gray-100">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <FaGithub />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Clown - Social Media App",
      category: "webdev",
      description: "A full-stack social media platform with MERN stack, deployed on AWS EC2 with AI-powered features.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "AWS", "Docker", "Nginx", "Socket.io", "Tailwind CSS"],
      keyFeatures: [
        "Post creation with AI-generated captions (using Mistral-7B)",
        "Real-time chat functionality",
        "Secure authentication with JWT and HTTP-only cookies",
        "Email verification via OTP",
        "Scalable cloud deployment on AWS using Docker, Github-actions, Nginx"
      ],
      githubUrl: "https://github.com/Avngrstark62/Clown",
      liveUrl: "https://clownapp.fun",
    },
    {
      id: 2,
      title: "Cricket Simulator",
      category: "webdev",
      description: "A cricket match simulator with probability models for ball-by-ball simulation.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
      keyFeatures: [
        "Ball-by-ball match simulation with realistic probabilities",
        "Real-time score updates and match statistics",
        "Responsive web interface"
      ],
      githubUrl: "https://github.com/Avngrstark62/Cricket-Simulator",
      liveUrl: "https://crickulator.vercel.app",
    },
    {
      id: 3,
      title: "Movie Recommendation System",
      category: "ai",
      description: "A content-based movie recommendation engine with TMDb API integration.",
      techStack: ["Python", "Flask", "Streamlit", "Pandas"],
      keyFeatures: [
        "Content-based recommendation using cosine similarity",
        "TMDb API integration for movie posters and metadata",
        "Autocomplete input for movie selection",
        "Displays top 20 similar movies",
        "User-friendly interface with movie posters"
      ],
      githubUrl: "https://github.com/Avngrstark62/Movie-Recommendation-System",
      liveUrl: "https://huggingface.co/spaces/avngrstark/Movie-Recommendation-System",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my standout projects that demonstrate my technical capabilities and problem-solving skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;