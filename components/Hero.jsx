import { motion } from 'framer-motion';
import useTypewriterEffect from '../pages/helpers';
import React  from 'react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const childVariants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
}

const rightChildVariants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
}

const Hero = React.memo(function Hero({ textEnter, textLeave }) {
    return (
      // bg-[url(http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRYTDd0TpMoqQGNma3HkFSDpt_3h3h7SiJLBehqMn_riUfoCAuf72OGp_BHQ8y6DpyWfzL6NiPJpLBWwDOcu84)] bg-cover bg-center bg-no-repeat
      <section id="home" className="min-h-screen flex items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto w-full p-4 ml-5"
        > 
          <motion.h1 
            variants={childVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            <div 
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{ fontFamily: '"ClashDisplayVariable", "ClashDisplay"' }}
            > 
            
            Hi, I'm 
            
            <span className="text-accent">
              {useTypewriterEffect(
                ["Claudia Yamamoto.", "a teacher.", "a student.", "a software engineer.", "a web developer.", "a musician.", "a 3D modeler."]
              )}
            </span>
            
            </div>
          </motion.h1>
          
          <motion.h2
            variants={rightChildVariants}
            className="text-md sm:text-lg md:text-xl text-text-secondary mb-8"
          >
            <div className='text-saccent'>and I love to build things <span className='font-black'>♡</span></div>
          </motion.h2>

  {/*         
          <motion.p
            variants={childVariants}
            className="text-lg text-text-secondary max-w-lg mb-8"
          >
          </motion.p> */}

        </motion.div>
      </section>
    )
  }
);

export default Hero;