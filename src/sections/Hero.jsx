import { ArrowRight, ChevronDown, Download } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "@/components/Button"
import AnimatedBorderButton from "@/components/AnimatedBorderButton"
import { useRef } from "react"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "API Integration",
  "Git",
  "GitHub",
  "Vercel",
  "Responsive Design",
];

function Hero() {
  const marqueeRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - marqueeRef.current.offsetLeft;
    scrollLeft.current = marqueeRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    marqueeRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Hero image" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i} 
            className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`, 
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-lg text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Full Stack Web Developer
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Turning <span className="text-primary glow-text">ideas</span>
                <br />
                into fast, reliable,
                <br />
                <span className="font-serif italic font-normal text-white">
                  and beautiful apps.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I'm Atalay Kahsay, a Full Stack Web Developer specializing in the MERN stack, with a strong foundation in building scalable, performant, and user-centered web applications. I use React, JavaScript, and Tailwind CSS to create engaging front-end experiences, while leveraging Node.js, Express, MongoDB, and MySQL to build reliable and efficient back-end systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            <div 
              className="flex items-center gap-4 animate-fade-in animation-delay-400">
              {[
                {icon: FaGithub, href: "https://github.com/AtalayKahsay"},
                {icon: FaLinkedin,  href: "https://www.linkedin.com/in/atalay-kahsay-a4ab283b1"},
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300 order-first lg:order-last">
            <div className="relative max-w-md mx-auto">
              <div 
                className="absolute inset-0 rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent to-primary/10 blur-2xl      animate-pulse" 
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img 
                  src="/atalay-profile.png" 
                  alt="Atalay Kahsay" className="w-full aspect-4/5 object-cover rounded-2xl" 
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-full px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Open To Work</span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">MERN</div>
                  <div className="text-xs text-muted-foreground">
                    Stack Developer
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies & Tools
          </p>
          <div 
            ref={marqueeRef}
            className="relative overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing select-none pb-4 mb-6 scrollbar-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground hover:text-primary transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">
            scroll to explore
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
      </div>
      
    </section>
  )
}

export default Hero