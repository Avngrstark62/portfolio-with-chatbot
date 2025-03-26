import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaRobot } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiDocker, SiTensorflow } from 'react-icons/si';
import { FaAws } from 'react-icons/fa'; // AWS icon is in Fa icons not Si

// Reusable ProjectCard component
const ProjectCard = ({ project }) => {
  const iconMap = {
    frontend: <FaCode className="text-blue-500" />,
    backend: <FaServer className="text-green-500" />,
    ai: <FaRobot className="text-purple-500" />,
  };

  const techIcons = {
    'TypeScript': <SiTypescript className="text-blue-600" />,
    'Next.js': <SiNextdotjs />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-500" />,
    'Node.js': <SiNodedotjs className="text-green-600" />,
    'Express': <SiExpress />,
    'PostgreSQL': <SiPostgresql className="text-blue-700" />,
    'Docker': <SiDocker className="text-blue-400" />,
    'AWS': <FaAws className="text-orange-500" />,
    'TensorFlow': <SiTensorflow className="text-orange-600" />,
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden relative">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <div className="text-center p-4">
              <div className="text-4xl mb-2">{iconMap[project.category]}</div>
              <p>Project Preview</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
            {project.category === 'frontend' ? 'Frontend' : 
             project.category === 'backend' ? 'Backend' : 'AI/ML'}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        {/* Tech Stack */}
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
        
        {/* Key Features */}
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
        
        {/* Project Links */}
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

// Main Projects Component
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Study Partner Platform",
      category: "ai",
      description: "An intelligent platform that connects students with compatible study partners using machine learning algorithms.",
      techStack: ["TypeScript", "Next.js", "Node.js", "TensorFlow", "PostgreSQL"],
      keyFeatures: [
        "AI-based matching algorithm",
        "Real-time chat functionality",
        "Automated scheduling system",
        "Performance analytics dashboard"
      ],
      githubUrl: "https://github.com/yourusername/study-partner",
      liveUrl: "https://studypartner.example.com",
      image: "/project-ai.jpg"
    },
    {
      id: 2,
      title: "E-Commerce Analytics Dashboard",
      category: "frontend",
      description: "A comprehensive dashboard for e-commerce businesses to track sales, customer behavior, and inventory in real-time.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      keyFeatures: [
        "Interactive data visualizations",
        "Customizable reporting",
        "Inventory management",
        "Mobile-responsive design"
      ],
      githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
      liveUrl: "https://dashboard.example.com",
      image: "/project-dashboard.jpg"
    },
    {
      id: 3,
      title: "Cloud-Based Content Management System",
      category: "backend",
      description: "A scalable CMS solution with multi-tenant architecture built for enterprise clients.",
      techStack: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS"],
      keyFeatures: [
        "Role-based access control",
        "Automated backups",
        "API-first architecture",
        "Continuous deployment pipeline"
      ],
      githubUrl: "https://github.com/yourusername/enterprise-cms",
      liveUrl: "https://cms.example.com",
      image: "/project-cms.jpg"
    }
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
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Want to see more of my work?</p>
          <a 
            href="https://github.com/Avngrstark62" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            <FaGithub className="mr-2" />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

// const Projects = () => {
//     return (
//         <h1>Projects</h1>
//     )
// }

// export default Projects;