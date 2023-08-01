import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skillsets from "@/components/Skillsets";
import Footer from "@/components/Footer";

export default function Home() {
  const useScrollClass = () => {
    const [scrollClass, setScrollClass] = useState("");

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrollClass("scrolled");
        } else {
          setScrollClass("");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return scrollClass;
  };

  const useSectionClass = (id) => {
    const [sectionClass, setSectionClass] = useState("");

    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById(id);
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setSectionClass("in-view");
        } else {
          setSectionClass("");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [id]);

    return sectionClass;
  };

  const scrollClass = useScrollClass();
  const aboutClass = useSectionClass("about");
  const skillsetsClass = useSectionClass("skillsets");
  const projectsClass = useSectionClass("portfolio");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className={`${scrollClass}  `}>

    <div className="bg-accent-focus w-full z-50 fixed top-0 left-0 right-0" >
      <nav className=" p-4 w-[80%] mx-auto ">
        <div className="flex items-center justify-between">
          <div className="text-2xl text-primary-content uppercase tracking-widest"><span className="text-neutral-focus">Binary</span>Craft</div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="text-xl text-primary-content">About</a>
            <a href="#skillsets" className="text-xl text-primary-content">Skillsets</a>
            <a href="#portfolio" className="text-xl text-primary-content">Projects</a>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 py-4 px-8 shadow-md">
          <div className="flex flex-col space-y-4">
              <a href="#about" >About</a>
              <a href="#skillsets">Skillsets</a>
              <a href="#portfolio">Portfolio</a>
            </div>
          </div>
        )}
      </nav>
      </div>
      
      <About scrollClass={scrollClass} />
      <Skillsets sectionClass={skillsetsClass} />
      <Portfolio sectionClass={projectsClass} />
      <Footer/>
    </div>
  );
}
