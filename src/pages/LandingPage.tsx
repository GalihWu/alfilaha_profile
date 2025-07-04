import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Contact from '../components/Contact';
import Articles from '../components/Articles';

import { motion, useScroll } from 'framer-motion';

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          zIndex: 100,
          backgroundColor: '#7aad42',
        }}
      ></motion.div>
      <div className="min-h-screen">
        <Hero />
        <About />
        <Programs />
        <Articles />
        <Contact />
      </div>
    </>
  );
};

export default LandingPage;
