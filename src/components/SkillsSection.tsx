
const SkillsSection = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden" id="skills">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-5xl font-extrabold mb-8">Technical <br /> Playground</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        I don't just write code; I craft systems. My stack is carefully selected to provide the best performance and developer experience.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-white dark:bg-slate-800 border-2 border-slate-900 rounded-2xl shadow-chunky">
                            <span className="material-icons text-primary text-4xl mb-4">computer</span>
                            <h4 className="font-bold text-lg mb-2">Front-end</h4>
                            <p className="text-sm opacity-70">React, Next.js, Tailwind, React-Native</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-800 border-2 border-slate-900 rounded-2xl shadow-chunky">
                            <span className="material-icons text-secondary-peach text-4xl mb-4">storage</span>
                            <h4 className="font-bold text-lg mb-2">Back-end</h4>
                            <p className="text-sm opacity-70">Node.js, Spring Boot, PostgreSQL, MongoDB</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[500px] flex flex-wrap content-start gap-4 p-8 bg-slate-100 dark:bg-slate-900/50 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-4xl">
                    <div className="bg-white dark:bg-slate-800 border-2 border-slate-900 px-4 py-2 rounded-lg font-bold shadow-chunky transform -rotate-6">JavaScript</div>
                    <div className="bg-primary border-2 border-slate-900 px-4 py-2 rounded-lg font-bold shadow-chunky transform rotate-3">TypeScript</div>
                    <div className="bg-secondary-peach border-2 border-slate-900 px-4 py-2 rounded-lg font-bold shadow-chunky transform rotate-12">Java</div>
                    <div className="bg-secondary-periwinkle border-2 border-slate-900 px-4 py-2 rounded-lg font-bold shadow-chunky transform -rotate-3">Express</div>
                    <div className="bg-white dark:bg-slate-800 border-2 border-slate-900 px-4 py-2 rounded-lg font-bold shadow-chunky transform rotate-2">Docker</div>
                    <div className="bg-primary border-2 border-slate-900 px-4 py-2 rounded-lg font-bold shadow-chunky transform rotate-6">Git and Github</div>
                    <div className="bg-secondary-periwinkle border-2 border-slate-900 px-4 py-2 rounded-lg font-bold shadow-chunky transform -rotate-12">Redis</div>
                    <div className="bg-white dark:bg-slate-800 border-2 border-slate-900 px-4 py-2 rounded-lg font-bold shadow-chunky transform rotate-1">WebSockets</div>
                    <div className="bg-secondary-peach border-2 border-slate-900 px-4 py-2 rounded-lg font-bold shadow-chunky transform rotate-6">Python</div>
                    <div className="bg-primary border-2 border-slate-900 px-4 py-2 rounded-lg font-bold shadow-chunky transform -rotate-2">C++</div>
                    <div className="bg-white dark:bg-slate-800 border-2 border-slate-900 px-4 py-2 rounded-lg font-bold shadow-chunky transform rotate-2">Docker</div>
                    <div className="absolute bottom-8 right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute top-8 left-8 w-32 h-32 bg-secondary-peach/20 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection