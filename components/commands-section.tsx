"use client"

import { motion } from "framer-motion"

export function CommandsSection() {
  return (
    <section className="my-[6.25rem] lg:my-[10rem] bg-black max-w-7xl mx-auto px-5 md:px-8 lg:px-30 select-none" aria-labelledby="commands-heading">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-13 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            id="commands-heading" 
            className="text-4xl font-semibold text-white mb-4"
          >
            Commands we <span className="text-[#EFCC3A]">love</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            These commands are designed to be natural and easy to remember.
          </motion.p>
        </div>
        
        <div role="list" aria-label="Keyboard shortcuts">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl mx-auto flex justify-between items-center py-6 border-b border-white/10"
          >
            <div className="flex-col flex flex-1">
              <h3 className="text-white font-semibold text-lg mb-2 select-none">Hide/Show Window</h3>
              <p className="text-gray-400 text-sm">Hide or show Interview Coder</p>
            </div>
            <div className="flex items-center select-none">
              <div className="flex items-center gap-1">
                <button className="inline-flex items-center justify-center bg-[#EFCC3A] text-black rounded-lg px-3 py-2 min-w-[70px] text-sm font-medium transition-colors duration-200">
                  Control
                </button>
                <span className="text-gray-500 mx-2 text-sm">+</span>
                <button className="inline-flex items-center justify-center bg-[#1E1E1E] text-white border border-white/20 rounded-lg px-3 py-2 min-w-[40px] text-sm font-medium transition-colors duration-200">
                  B
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl mx-auto flex justify-between items-center py-6 border-b border-white/10"
          >
            <div className="flex-col flex flex-1">
              <h3 className="text-white font-semibold text-lg mb-2 select-none">Take Screenshot</h3>
              <p className="text-gray-400 text-sm">Capture screenshots of the interview question</p>
            </div>
            <div className="flex items-center select-none">
              <div className="flex items-center gap-1">
                <button className="inline-flex items-center justify-center bg-[#EFCC3A] text-black rounded-lg px-3 py-2 min-w-[70px] text-sm font-medium transition-colors duration-200">
                  Control
                </button>
                <span className="text-gray-500 mx-2 text-sm">+</span>
                <button className="inline-flex items-center justify-center bg-[#1E1E1E] text-white border border-white/20 rounded-lg px-3 py-2 min-w-[40px] text-sm font-medium transition-colors duration-200">
                  H
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl mx-auto flex justify-between items-center py-6 border-b border-white/10"
          >
            <div className="flex-col flex flex-1">
              <h3 className="text-white font-semibold text-lg mb-2 select-none">Move Window</h3>
              <p className="text-gray-400 text-sm">Move the window around your screen without touching the mouse</p>
            </div>
            <div className="flex items-center select-none">
              <div className="flex items-center gap-1">
                <button className="inline-flex items-center justify-center bg-[#EFCC3A] text-black rounded-lg px-3 py-2 min-w-[70px] text-sm font-medium transition-colors duration-200">
                  Control
                </button>
                <span className="text-gray-500 mx-2 text-sm">+</span>
                <button className="inline-flex items-center justify-center bg-[#1E1E1E] text-white border border-white/20 rounded-lg px-3 py-2 min-w-[40px] text-sm font-medium transition-colors duration-200">
                  ↑
                </button>
                <button className="inline-flex items-center justify-center bg-[#1E1E1E] text-white border border-white/20 rounded-lg px-3 py-2 min-w-[40px] text-sm font-medium transition-colors duration-200">
                  ↓
                </button>
                <button className="inline-flex items-center justify-center bg-[#1E1E1E] text-white border border-white/20 rounded-lg px-3 py-2 min-w-[40px] text-sm font-medium transition-colors duration-200">
                  ←
                </button>
                <button className="inline-flex items-center justify-center bg-[#1E1E1E] text-white border border-white/20 rounded-lg px-3 py-2 min-w-[40px] text-sm font-medium transition-colors duration-200">
                  →
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl mx-auto flex justify-between items-center py-6 border-b border-white/10"
          >
            <div className="flex-col flex flex-1">
              <h3 className="text-white font-semibold text-lg mb-2 select-none">Generate Solution</h3>
              <p className="text-gray-400 text-sm">Generate an initial solution with explanations</p>
            </div>
            <div className="flex items-center select-none">
              <div className="flex items-center gap-1">
                <button className="inline-flex items-center justify-center bg-[#EFCC3A] text-black rounded-lg px-3 py-2 min-w-[70px] text-sm font-medium transition-colors duration-200">
                  Control
                </button>
                <span className="text-gray-500 mx-2 text-sm">+</span>
                <button className="inline-flex items-center justify-center bg-[#1E1E1E] text-white border border-white/20 rounded-lg px-3 py-2 min-w-[70px] text-sm font-medium transition-colors duration-200">
                  Enter
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl mx-auto flex justify-between items-center py-6 border-b border-white/10"
          >
            <div className="flex-col flex flex-1">
              <h3 className="text-white font-semibold text-lg mb-2 select-none">Reset Context</h3>
              <p className="text-gray-400 text-sm">Reset everything to start fresh with a new problem</p>
            </div>
            <div className="flex items-center select-none">
              <div className="flex items-center gap-1">
                <button className="inline-flex items-center justify-center bg-[#EFCC3A] text-black rounded-lg px-3 py-2 min-w-[70px] text-sm font-medium transition-colors duration-200">
                  Control
                </button>
                <span className="text-gray-500 mx-2 text-sm">+</span>
                <button className="inline-flex items-center justify-center bg-[#1E1E1E] text-white border border-white/20 rounded-lg px-3 py-2 min-w-[40px] text-sm font-medium transition-colors duration-200">
                  G
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}