import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiFeather, FiBook, FiInstagram } from 'react-icons/fi'


export default function Contact({ textEnter, textLeave }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        'service_id',
        'template_id',
        formData,
        'user_id'
      )
      setSubmitMessage({
        type: 'success',
        text: 'Message sent successfully! I will get back to you soon.',
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Failed to send message. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-secondary/30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-text mr-4">Contact</h2>
          <div className="flex-1 h-px bg-[var(--text-secondary)]/30"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
          <div 
            className='titlee'
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}> 
            <h3 className="text-2xl font-bold text-[var(--accent-secondary)] mb-4">
              Let's work together
            </h3>
          </div>
            <p className="text-[var(--text-secondary)] mb-8">
              Whether you have a question or just want to say hi, 
              I'll do my best to get back to you!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:claudia.parlee@gmail.com"
                className="flex items-center text-[var(--text)]hover:text-[var(--accent)] transition-colors"
              >
                <FiMail className="mr-3" size={20} />
                email me 
              </a>
              <a 
                href="https://claudias.online/"
                className="flex items-center text-[var(--text)] hover:text-[var(--accent-secondary)] transition-colors"
              >
                <FiFeather className="mr-3" size={20} />
                check out my blog
              </a>
              <a 
                href="https://claudias.online/"
                className="flex items-center text-[var(--text)] hover:text-[var(--accent)] transition-colors"
              >
                <FiBook className="mr-3" size={20} />
                view my resume here
              </a>
            </div>

            <div onMouseEnter = {textEnter} onMouseLeave={textLeave} className="inline-flex space-x-4 mt-8">
              {[
                {
                  icon: <FiGithub size={24} />,
                  url: 'https://github.com/jeanmilo',
                },
                {
                  icon: <FiLinkedin size={24} />,
                  url: 'https://linkedin.com/in/claudia-yamamoto',
                },
                {
                  icon: <FiInstagram size={24} />,
                  url: 'https://instagram.com/adoni.x',
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text)]hover:text-saccent transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[var(--text)]mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[var(--secondary)]/30 border border-text-secondary/30 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--text)]mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[var(--secondary)]/30 border border-text-secondary/30 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[var(--text)]mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[var(--secondary)]/30 border border-text-secondary/30 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-[var(--secondary)]/30 text-primary font-medium rounded hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitMessage && (
              <p
                className={`mt-4 ${
                  submitMessage.type === 'success'
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {submitMessage.text}
              </p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}