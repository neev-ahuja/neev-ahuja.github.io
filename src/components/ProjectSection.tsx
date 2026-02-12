import { useState, useEffect } from "react";
import ECommerce from '../assets/ecommerce.png';
import ChatApp from '../assets/chatapp.png';
import Vehichle from '../assets/vehicle.png';
import Chess from '../assets/chess.png';
import HerSaheli from '../assets/hersaheli.png'

const ProjectSection = () => {

    const projects = [
        {
            name: "E-Commerce Application",
            description: "A modern full-stack e-commerce platform built with Spring Boot and React. Features secure JWT authentication, real-time Razorpay payments, order tracking, and a responsive product browsing experience.",
            techStack: "React, SpringBoot, TailwindCSS , Razor Pay",
            image: ECommerce,
            link: "https://github.com/neev-ahuja/ecommerce-springboot-react"
        },
        {
            name: "Chat App",
            description: "A real-time chat application built with Spring Boot (Backend) and React (Frontend), featuring WebSocket-based messaging, JWT authentication, and MongoDB storage.",
            techStack: "React, SpringBoot, TailwindCSS , MongoDB , JWT , WebRTC",
            image: ChatApp,
            link: "https://chat-app-springboot-six.vercel.app/"
        }, {
            name: "Vehicle Rental",
            description: "A real-time chat application built with Spring Boot (Backend) and React (Frontend), featuring WebSocket-based messaging, JWT authentication, and MongoDB storage.",
            techStack: "React, Node.js , Express, TailwindCSS , MongoDB , JWT",
            image: Vehichle,
            link: "https://github.com/neev-ahuja/vehicle-rental"
        }
        , {
            name: "Chess Game",
            description: "A modern Chess Game built with Next.js, featuring classic two-player gameplay, AI opponent powered by Stockfish, real-time multiplayer using Socket.io, and a clean, intuitive interface. The game follows standard chess rules and offers adjustable AI difficulty levels.",
            techStack: "Next.js, TailwindCSS, Socket.io, Stockfish",
            image: Chess,
            link: "https://chess-game-next-ashen.vercel.app/online"
        }, {
            name: "Her Saheli",
            description: "A period and wellness tracking app built with React Native, designed for a diverse audience with adaptive modes including regular cycle tracking, pregnancy, and menopause. Her Saheli focuses on accessibility, personalized insights, and intuitive health analytics.",
            techStack: "React-Native",
            image: HerSaheli,
            link: "https://github.com/neev-ahuja/her-saheli-app"
        }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [touchStart, setTouchStart] = useState<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleProjects(1);
            } else if (window.innerWidth < 1024) {
                setVisibleProjects(2);
            } else {
                setVisibleProjects(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNext = () => {
        setStartIndex((prev) => (prev + visibleProjects) % projects.length);
    }

    const handlePrev = () => {
        setStartIndex((prev) => (prev - visibleProjects + projects.length) % projects.length);
    }

    const onTouchStart = (e: React.TouchList | any) => {
        setTouchStart(e.targetTouches[0].clientX);
    }

    const onTouchEnd = (e: React.TouchList | any) => {
        if (!touchStart) return;
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;

        if (diff > 30) {
            handleNext();
        } else if (diff < -30) {
            handlePrev();
        }
        setTouchStart(null);
    }

    return (
        <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden" id="work">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                <div className="max-w-xl">
                    <span className="inline-block py-1 px-3 bg-primary/10 border border-primary/30 rounded-md text-xs font-bold text-primary mb-4 tracking-widest uppercase">
                        Featured Work
                    </span>
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Selected Work</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">A collection of projects where functionality meets delight. Every pixel has a purpose.</p>
                </div>
                <div className="flex flex-col items-end gap-6">
                    <div className="flex gap-3">
                        <button
                            className="p-4 border-2 border-slate-900 rounded-xl bg-white hover:bg-slate-50 transition-all shadow-chunky cursor-pointer active:translate-x-1 active:translate-y-1 active:shadow-none hover:-translate-x-0.5 hover:-translate-y-0.5"
                            onClick={handlePrev}
                            aria-label="Previous Projects"
                        >
                            <span className="material-icons">chevron_left</span>
                        </button>
                        <button
                            className="p-4 border-2 border-slate-900 rounded-xl bg-white hover:bg-slate-50 transition-all shadow-chunky cursor-pointer active:translate-x-1 active:translate-y-1 active:shadow-none hover:-translate-x-0.5 hover:-translate-y-0.5"
                            onClick={handleNext}
                            aria-label="Next Projects"
                        >
                            <span className="material-icons">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className="relative mb-12"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <div
                    className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) -mx-4"
                    style={{
                        transform: `translateX(-${(startIndex * 100) / projects.length}%)`,
                        width: `${(projects.length * 100) / visibleProjects}%`
                    }}
                >
                    {
                        projects.map((elem, index) => {
                            return (
                                <div
                                    className="shrink-0 px-4 transition-all group hover:-translate-y-2 pointer-events-auto"
                                    style={{ width: `${100 / projects.length}%` }}
                                    key={index}
                                >
                                    <div className="polaroid bg-white p-5 pb-12 border-2 border-slate-900 shadow-chunky transition-all h-full">
                                        <div className="relative aspect-video mb-6 overflow-hidden border-2 border-slate-900 rounded-lg group-hover:border-primary transition-colors">
                                            <img className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110" src={elem.image} alt={elem.name} />
                                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors pointer-events-none" />
                                        </div>
                                        <div className="px-2">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-2xl font-bold tracking-tight">{elem.name}</h3>
                                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors cursor-pointer" onClick={() => window.open(elem.link, "_blank")}>arrow_outward</span>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">{elem.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {
                                                    elem.techStack.split(",").map((tech, techIndex) => {
                                                        return (
                                                            <span
                                                                className={`text-[10px] uppercase tracking-wider font-extrabold px-2 py-1 rounded border-2 ${techIndex % 2 === 0 ? "border-primary/20 bg-primary/5 text-primary" : "border-secondary-peach/30 bg-secondary-peach/5 text-orange-600"}`}
                                                                key={techIndex}
                                                            >
                                                                {tech.trim()}
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex justify-center gap-3">
                {Array.from({ length: Math.ceil(projects.length / visibleProjects) }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setStartIndex(i * visibleProjects)}
                        className={`transition-all duration-300 rounded-full border-2 border-slate-900 ${Math.floor(startIndex / visibleProjects) === i
                            ? "w-12 h-3 bg-primary"
                            : "w-3 h-3 bg-white hover:bg-slate-100"
                            } cursor-pointer`}
                        aria-label={`Go to page ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectSection