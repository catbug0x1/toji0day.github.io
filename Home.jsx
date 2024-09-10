import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Twitter } from "lucide-react";

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-4xl mx-auto px-4"
    >
      <motion.h1 
        className="text-6xl font-bold mb-6 text-green-400 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        Welcome to Toji's Cybersecurity Hub
      </motion.h1>
      <motion.p 
        className="text-xl mb-4 text-gray-300"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
      >
        Penetration tester at Bugcrowd | Cybersecurity Enthusiast | Continuous Learner
      </motion.p>
      <motion.div 
        className="mb-8"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
      >
        <a 
          href="https://twitter.com/toji0day" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Twitter className="w-5 h-5 mr-2" />
          Follow me on X
        </a>
      </motion.div>
      <motion.div 
        className="mb-12"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
      >
        <p className="text-lg italic text-gray-400">
          "In the realm of cybersecurity, every challenge is an opportunity to learn and grow."
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { to: "/portfolio", title: "Portfolio", description: "Explore my skills, certifications, and completed projects in penetration testing." },
          { to: "/roadmap", title: "Learning Roadmap", description: "Discover my curated learning path for both Blue Team and Red Team cybersecurity roles." },
          { to: "/blog", title: "Cybersecurity Blog", description: "Read my articles on the latest trends, tutorials, and personal insights in cybersecurity." },
          { to: "/activity", title: "Recent Activity", description: "Check out my contributions and engagements in the cybersecurity community." }
        ].map((item, index) => (
          <motion.div
            key={item.to}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 100 }}
          >
            <Link to={item.to} className="block bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-500/30">
              <h2 className="text-2xl font-semibold mb-4 text-green-400">{item.title}</h2>
              <p className="text-gray-300">
                {item.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;