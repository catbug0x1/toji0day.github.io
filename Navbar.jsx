import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Twitter } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav 
      className="bg-gray-900 border-b border-green-500/50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Toji0day
            </motion.span>
          </Link>
          <div className="flex items-center space-x-6">
            {[
              { to: "/portfolio", label: "Portfolio" },
              { to: "/roadmap", label: "Roadmap" },
              { to: "/blog", label: "Blog" },
              { to: "/activity", label: "Activity" }
            ].map((item, index) => (
              <motion.div
                key={item.to}
                className="inline-block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link to={item.to} className="text-green-400 hover:text-green-300 transition-colors">
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="https://twitter.com/toji0day"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;