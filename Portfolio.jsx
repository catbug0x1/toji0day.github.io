import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Portfolio = () => {
  const skills = [
    { name: "Network Penetration Testing", value: 30 },
    { name: "Web Application Security", value: 25 },
    { name: "Mobile Application Security", value: 15 },
    { name: "Social Engineering", value: 10 },
    { name: "Vulnerability Assessment", value: 15 },
    { name: "Exploit Development", value: 5 },
  ];

  const COLORS = ['#00C49F', '#0088FE', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  const certifications = [
    "Offensive Security Certified Professional (OSCP)",
    "Certified Ethical Hacker (CEH)",
    "CompTIA Security+",
    "GIAC Web Application Penetration Tester (GWAPT)",
    "Certified Information Systems Security Professional (CISSP)",
  ];

  const projects = [
    {
      title: "Web Application Vulnerability Assessment",
      description: "Conducted a comprehensive security assessment of a client's e-commerce platform, identifying and helping to remediate critical vulnerabilities.",
      technologies: ["OWASP ZAP", "Burp Suite", "Custom Python Scripts"],
    },
    {
      title: "Network Penetration Testing for Financial Institution",
      description: "Performed an authorized penetration test on a bank's internal network, uncovering and reporting potential security risks.",
      technologies: ["Nmap", "Metasploit", "Wireshark", "Cobalt Strike"],
    },
    {
      title: "Mobile App Security Audit",
      description: "Analyzed the security of a popular mobile banking application, providing recommendations for enhancing data protection and user privacy.",
      technologies: ["MobSF", "Frida", "Objection", "Android Studio"],
    },
    {
      title: "IoT Device Security Assessment",
      description: "Evaluated the security of a smart home device ecosystem, identifying vulnerabilities in communication protocols and firmware.",
      technologies: ["Firmware analysis tools", "Wireshark", "Custom scripts for protocol analysis"],
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Portfolio</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={skills}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {skills.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <div className="w-4 h-4 mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="space-y-2">
          {certifications.map((cert, index) => (
            <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              {cert}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-green-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-700 text-green-400 px-2 py-1 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;