import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent-start/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-accent-start transition-colors">首页</a>
            <a href="#about" className="hover:text-accent-start transition-colors">关于我</a>
            <a href="#projects" className="hover:text-accent-start transition-colors">项目展示</a>
            <a href="#contact" className="hover:text-accent-start transition-colors">联系方式</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <Projects />

        {/* Placeholder sections for other features */}
        <section id="about" className="py-20 px-6 bg-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">关于我</h2>
            <p className="text-gray-400">正在开发中...</p>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">联系方式</h2>
            <p className="text-gray-400">正在开发中...</p>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} My Portfolio. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  )
}

export default App
