import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About({ textEnter, textLeave }) {
  return (
    <section id="about" className="py-20 bg-secondary/30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-text mr-4">About Me</h2>
          <div className="flex-1 h-px bg-[var(--text-secondary)]/30"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="prose text-[var(--text-secondary)] text-md font-normal">
              <p>
                <span className='bg-[var(--secondary)]/50 font-bold rounded text-[var(--text)]'>Claudia Yamamoto</span> {' '}
                (they/them) is a programmer based in New York City. 
                They are in their final year at {' '}
                <span className="text-accent">CUNY's Hunter College</span>, {' '}
                majoring in Computer Science with a minor in Mathematics. 
                They're passionate about accessibility in tech, food science, and human-created projects. 
              </p>
              <br></br>
              <p>
                Claudia currently works at {' '}
                <span className="text-accent">theCoderSchool</span>, and {' '}
                <span className="text-accent">l'École</span>.
                They are also working in conjunction with {' '}
                <span className="text-accent">IEEE SIGHT UFF</span> {' '} to build computer
                science curriculums for kids in underserved neighborhoods of Rio de Janeiro.   
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div 
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-[50%] overflow-hidden border-2 border-accent">
              <Image
                src="/images/philly.jpeg"
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <br></br>
        <ul className="grid grid-cols-3 gap-5 mt-8 ml-3 mr-4 text-center text-xs sm:text-sm md:text-md items-center">
              {[
                'HTML',
                'CSS',
                'JS',
                'Python',
                '',
                'MySQL',
                'React',
                'C++',
                'Tailwind',
              ].map((tech, i) => (
                <li key={i} className="flex justify-center items-center text-center m-auto">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-[var(--accent)]">{tech}</span>
                </li>
              ))}
            </ul>
      </motion.div>
    </section>
  )
}