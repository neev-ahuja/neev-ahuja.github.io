
const Hero = ({ scrollToContact }: { scrollToContact: () => void }) => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
                <div className="tech-bubble absolute top-1/4 left-10 md:left-20 w-32 h-32 bg-primary/20 border-2 border-primary rounded-full flex flex-col items-center justify-center p-4 animate-bounce" style={{ animationDuration: '3s' }}>
                    <span className="material-icons text-3xl">storage</span>
                    <span className="text-xs font-bold">MONGODB</span>
                </div>
                <div className="tech-bubble absolute bottom-1/4 right-10 md:right-32 w-28 h-28 bg-secondary-peach/30 border-2 border-orange-300 rounded-full flex flex-col items-center justify-center p-4 animate-bounce" style={{ animationDuration: '4s' }}>
                    <span className="material-icons text-3xl">code</span>
                    <span className="text-xs font-bold">NEXT.JS</span>
                </div>
                <div className="tech-bubble absolute top-1/3 right-20 w-24 h-24 bg-secondary-periwinkle/30 border-2 border-indigo-300 rounded-full flex flex-col items-center justify-center p-4 animate-bounce" style={{ animationDuration: '3.5s' }}>
                    <span className="material-icons text-3xl">bolt</span>
                    <span className="text-xs font-bold">SPRING</span>
                </div>
            </div>
            <div className="relative z-10 text-center max-w-4xl mx-auto pointer-events-auto">
                <span className="inline-block py-1 px-4 bg-secondary-periwinkle border-2 border-slate-900 rounded-full text-sm font-bold mb-6 transform -rotate-2">
                    FULL-STACK DEVELOPER
                </span>
                <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-8">
                    Building things <br />
                    that <span className="text-primary italic">actually</span> move.
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
                    Specializing in MERN, Spring Boot, and Next.js. I turn complex logic into playful user experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button onClick={() => window.open("https://drive.google.com/file/d/1F9W1KIMSLxZP59SLy4LjUuySoFhr6rmy/view?usp=sharing")} className="cursor-pointer bg-primary px-8 py-4 rounded-xl border-2 border-slate-900 shadow-chunky hover:shadow-none hover:translate-y-1 hover:translate-x-1 text-slate-900 font-bold text-lg flex items-center justify-center gap-2 transition-all" >
                        View Resume
                    </button>
                    <button onClick={scrollToContact} className="cursor-pointer bg-white dark:bg-slate-800 px-8 py-4 rounded-xl border-2 border-slate-900 dark:border-slate-100 shadow-chunky hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] font-bold text-lg">
                        Let's Chat
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero