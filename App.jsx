import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Roadmap from "./pages/Roadmap";
import Blog from "./pages/Blog";
import Activity from "./pages/Activity";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-green-400 font-mono">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            className="container mx-auto px-4 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/activity" element={<Activity />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;