import { FaReact, FaNodeJs, FaDatabase, FaAws, FaPython, FaCode } from 'react-icons/fa';

const SkillCategory = ({ title, icon, skills }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-2xl text-blue-500">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-blue-400 to-purple-600 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      icon: <FaNodeJs />,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Flask", level: 80 },
        { name: "Python", level: 90 },
        { name: "FastAPI", level: 78 },
        { name: "Socket.io", level: 75 },
      ]
    },
    {
      title: "DevOps",
      icon: <FaAws />,
      skills: [
        { name: "AWS Cloud", level: 75 },
        { name: "Linux", level: 85 },
        { name: "Nginx", level: 80 },
        { name: "Docker", level: 85 },
        { name: "GitHub Actions", level: 70 },
      ]
    },
    {
      title: "AI/ML",
      icon: <FaPython />,
      skills: [
        { name: "LLM Integration", level: 78 },
        { name: "Hugging Face", level: 80 },
        { name: "Scikit-learn", level: 85 },
        { name: "TensorFlow", level: 75 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 88 },
        { name: "NLTK", level: 70 },
      ]
    },
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vite", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 92 },
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCategory 
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;