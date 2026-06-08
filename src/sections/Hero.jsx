import Button from "@/components/Button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import AnimatedBorderButton from "@/components/AnimatedBorderButton"

function Hero() {
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
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero