import profile from "../assets/myimage.jpeg";

const AboutSection = () => {
    return (
        <section className="py-24 px-6" id="about">
            <div className="max-w-5xl mx-auto  dark:bg-slate-800 rounded-[2.5rem] p-12  relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-primary opacity-20 select-none">
                    <span className="material-icons text-[200px] leading-none">brush</span>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 bg-secondary-peach border-4 border-slate-900 rounded-3xl overflow-hidden transform -rotate-3 shadow-chunky">
                        <img className="w-full h-full object-cover" data-alt="Professional portrait of a developer smiling" src={profile} />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Hello! I'm Neev.</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            I'm a self-taught full-stack developer who believes that the web should be fun. After years of building internal tools for startups, I realized that the best software is the one that people actually enjoy using.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            I love turning complex problems into elegant digital experiences. Whether it's designing smooth UI interactions, optimizing APIs, or experimenting with AI integrations, I enjoy building products that feel effortless. </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 font-bold bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full border border-slate-900">
                                <span className="material-icons text-primary">memory</span> DSA Builder
                            </div>
                            <div className="flex items-center gap-2 font-bold bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full border border-slate-900">
                                <span className="material-icons text-secondary-peach">sports_esports</span> Debug Warrior
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection