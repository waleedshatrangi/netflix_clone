import React from 'react'

function Subscription() {
  return (
    // Background Image fix: use bg-cover and bg-center
    <div className="relative w-full h-[500px] md:h-[700px] flex flex-col items-center justify-center text-center px-4 bg-[url('./assets/hero-bg.jpg')] bg-cover bg-center">
      
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-lg md:text-2xl mb-6">Starts at AED 29. Cancel anytime.</p>
        
        <div className="flex flex-col md:flex-row gap-2 w-full max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Email address" 
            className="flex-1 p-3 md:p-4 bg-black/40 border border-green-500 rounded outline-none"
          />
          <button className="bg-red-600 p-3 md:px-8 md:py-4 rounded font-bold text-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
export default Subscription