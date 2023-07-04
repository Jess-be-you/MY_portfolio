import Navbar from './pages/Navbar';
import LeftSide from './pages/LeftSide';
import RightSide from './pages/RightSide';
import Banner from './pages/Banner';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className=" w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ delay: 1.5}}
        className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </motion.div>
        <div className="h-[88vh] w-4/5 mx-auto p-4">
          <Banner />
          <About />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
          <Footer />
        </div>
        <motion.div 
         initial={{ opacity: 0}}
         animate={{ opacity: 1}}
         transition={{ delay: 1.5}}
        className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
