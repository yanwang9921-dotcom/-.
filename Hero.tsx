import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            你好，我是 <br />
            <span className="bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">
              全栈开发工程师
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            我热衷于使用现代技术栈构建高性能、易用的 Web 应用。
            专注于 React 生态系统，致力于将创意转化为流畅的数字化体验。
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-start to-accent-end font-semibold text-white hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent-start/20"
            >
              查看我的作品
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full border border-white/20 font-semibold hover:bg-white/10 transition-all hover:border-white/40 active:scale-95"
            >
              联系我
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          {/* Decorative Background Blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-start to-accent-end rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity animate-pulse"></div>
          
          {/* Image Container */}
          <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-white/10 p-2 bg-white/5 backdrop-blur-sm">
            <img 
              src={heroImg} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Floating Element 1 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl hidden md:block"
          >
            <span className="text-2xl">🚀</span>
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl hidden md:block"
          >
            <span className="text-2xl">💻</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
