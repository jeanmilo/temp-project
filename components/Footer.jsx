import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-8 border-t border-text-secondary/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="#home"
              className="text-accent font-bold text-lg hover:underline"
            >
              Claudia Yamamoto
            </Link>
          </div>

          <div className="text-sm text-text-secondary">
            <p>Designed & Built by ClauDia :3</p>
          </div>

          <div className="mt-4 md:mt-0 text-sm text-text-secondary">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}