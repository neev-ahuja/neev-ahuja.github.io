import { useLocation, useNavigate } from "react-router-dom";


interface NavbarProps {
    scrollToHero: () => void;
    scrollToProject: () => void;
    scrollToSkills: () => void;
    scrollToContact: () => void;
}

const Navbar = ({ scrollToHero, scrollToProject, scrollToSkills, scrollToContact }: NavbarProps) => {

    const navigate = useNavigate();

    const location = useLocation();

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-2 border-slate-900 dark:border-primary rounded-full px-6 py-3  flex items-center gap-12">
                <a className="font-bold text-xl tracking-tight flex items-center gap-2  whitespace-nowrap cursor-pointer" onClick={() => { if (location.pathname === '/') scrollToHero(); else navigate("/") }}>
                    <span className="w-3 h-3 bg-primary rounded-full"></span>
                    Neev Ahuja
                </a>
                <div className="hidden md:flex items-center gap-6 font-semibold text-sm ml-[30vw] whitespace-nowrap min-w-max">
                    <a className={`hover:text-primary transition-colors cursor-pointer`} onClick={() => { if (location.pathname === '/') scrollToProject(); else navigate("/") }}>Work</a>
                    <a className="hover:text-primary transition-colors cursor-pointer" onClick={() => { if (location.pathname === '/') scrollToSkills(); else navigate("/") }}>Skills</a>
                    <a className={`hover:text-primary transition-colors cursor-pointer`} onClick={() => { navigate('/about') }}>About</a>
                    <a
                        className="bg-primary text-slate-900 px-4 py-1.5 rounded-full border-2 border-slate-900 shadow-chunky-hover hover:shadow-none hover:translate-0.5 transition-all cursor-pointer"
                        onClick={() => { if (location.pathname === '/') scrollToContact(); else navigate("/") }}
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar