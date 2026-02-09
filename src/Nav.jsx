import bgimg from './assets/netflix-bkg.jpg'

const Nav = () => {
    return (
        <div className="relative w-full bg-black text-white min-h-[70vh] md:min-h-[90vh] flex flex-col">
            {/* Background Image Container - Proper Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 z-0" 
                style={{ backgroundImage: `url(${bgimg})` }}
            ></div>
            
            {/* Gradient Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-0"></div>

            {/* Header: Logo and Buttons */}
            <div className="relative z-10 flex justify-between items-center px-4 md:px-20 py-5">
                <p className="text-2xl md:text-4xl font-bold text-red-600">NETFLEX</p>
                
                <div className="flex gap-2 md:gap-4 items-center">
                    {/* Selector Fix: Removed pr-25, used proper padding */}
                    <div className="border border-gray-600 rounded bg-black/50 px-2 py-1">
                        <select name="" id="" className="bg-transparent outline-none text-sm md:text-base cursor-pointer">
                            <option className="text-black" value="English">English</option>
                            <option className="text-black" value="Arabic">Arabic</option>
                        </select>
                    </div>
                    <button className="bg-red-600 px-3 py-1 md:px-5 md:py-2 rounded text-sm md:text-base font-semibold">
                        Sign In
                    </button>
                </div>
            </div>

            {/* Hero Content: Unlimited films... */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-10 md:py-20">
                {/* w-150 replaced with max-w to prevent overflow */}
                <h1 className="text-3xl md:text-6xl font-bold max-w-[800px] leading-tight">
                    Unlimited films, series and more
                </h1>
                
                <p className="mt-4 font-semibold text-lg md:text-2xl">
                    Starts at AED 35. Cancel anytime.
                </p>
                
                <p className="mt-6 text-sm md:text-lg max-w-[600px]">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                {/* Email Input Group: Stack on mobile, side-by-side on desktop */}
                <div className="mt-6 flex flex-col md:flex-row items-center gap-3 w-full max-w-[600px]">
                    <input 
                        className="w-full md:flex-1 bg-black/40 border border-gray-500 p-3 md:p-4 rounded outline-none focus:border-white"
                        type="email" 
                        placeholder="Email Address" 
                    />
                    <button className="w-auto bg-red-600 px-8 py-3 md:py-4 rounded font-bold text-lg md:text-xl hover:bg-red-700 transition-colors shrink-0">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav