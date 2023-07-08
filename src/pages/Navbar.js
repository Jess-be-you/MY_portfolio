import React from 'react';
import logo from '../images/logo.png';
import Resume from '../images/Jesmi_Resume.pdf';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiMenu } from 'react-icons/hi';
import {
  TbBrandGithub,
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandLinkedin,
} from 'react-icons/tb';

const Navbar = () => {
  const ref = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const handleClick = (e) => {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  };

  return (
    <div className="w-full shadow-navbarShadow h-20 1g:h-[12vh] sticky top-0 z-50 bg-bodyColor px-8">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <a onClick={handleScroll} href="#home">
            <img className="brand-logo w-14" src={logo} alt="Logo" />
          </a>
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[16px] gap-7">
            <a onClick={handleScroll} href="#home" className="flex items-center gap-1 font-sm text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1 }}>
                Home
              </motion.li>
            </a>
            <a onClick={handleScroll} href="#about" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 }}>
                <span className="text-textGreen">0.1</span> About
              </motion.li>
            </a>
            <a onClick={handleScroll} href="#experience" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.2 }}>
                <span className="text-textGreen">0.2</span> Experience
              </motion.li>
            </a>
            <a onClick={handleScroll} href="#project" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.3 }}>
                <span className="text-textGreen">0.3</span> Project
              </motion.li>
            </a>
            <a onClick={handleScroll} href="#contact" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.4 }}>
                <span className="text-textGreen">0.4</span> Contact
              </motion.li>
            </a>
          </ul>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.5 }}
              className="w-24 h-10 rounded-md text-textGreen text-[16px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        <motion.div
          className="w-10 h-10 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setShowMenu(true)}>
          <HiMenu />
        </motion.div>
      </div>
      {showMenu && (
        <div
          className="absolute top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          ref={(node) => (ref.current = node)}
          onClick={handleClick}
        >
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-[80%] h-full scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
          >
            <HiMenu onClick={() => setShowMenu(false)} className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4" />
            <div className="flex flex-col items-center gap-7">
              <ul className="flex flex-col text-[20px] font-bodyFont items-center gap-7">
                <a onClick={handleScroll} href="#home" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                  <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}>
                    Home
                  </motion.li>
                </a>
                <a onClick={handleScroll} href="#about" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                  <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}>
                    <span className="text-textGreen">0.1</span> About
                  </motion.li>
                </a>
                <a onClick={handleScroll} href="#experience" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                  <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}>
                    <span className="text-textGreen">0.2</span> Experience
                  </motion.li>
                </a>
                <a onClick={handleScroll} href="#project" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                  <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}>
                    <span className="text-textGreen">0.3</span> Project
                  </motion.li>
                </a>
                <a onClick={handleScroll} href="#contact" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                  <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}>
                    <span className="text-textGreen">0.4</span> Contact
                  </motion.li>
                </a>
              </ul>
              <a href="./works/Jesmi (1).pdf" target="_blank">
                <motion.button
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.6, ease: "easeIn" }}
                  className="w-32 h-10 rounded-md text-textGreen text-[16px] border border-textGreen hover:bg-hoverColor duration-300"
                >
                  Resume
                </motion.button>
              </a>
              <div className="flex gap-4">
                <a href="https://github.com/Jess-be-you" target="_blank" rel="noreferrer">
                  <span className="w-10 h-10 text-xl  border-[1px] border-textDark hover:border-textGreen  rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <TbBrandGithub />
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/jesmi-p-j-740925236/" target="_blank" rel="noreferrer">
                  <span className="w-10 h-10 text-xl  border-[1px] border-textDark hover:border-textGreen  rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <TbBrandLinkedin />
                  </span>
                </a>
                <a href="https://twitter.com/p_jesmi?t=CSdXRzPUSjWuO26BzA2dbQ&s=08" target="_blank" rel="noreferrer">
                  <span className="w-10 h-10 text-xl  border-[1px] border-textDark hover:border-textGreen rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <TbBrandTwitter />
                  </span>
                </a>
                <a href="https://www.instagram.com/jesmi_payyapilly/" target="_blank" rel="noreferrer">
                  <span className="w-10 h-10 text-xl  border-[1px] border-textDark hover:border-textGreen  rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <TbBrandInstagram />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

