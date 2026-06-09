import { Code2, Lightbulb, Rocket, Users } from "lucide-react"


const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Writing structured, maintainable code across full-stack applications.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast and responsive web applications with optimized APIs and UI.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams to deliver complete product features.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Translating real-world requirements into functional web solutions.",
  },
]

function About() {
  return (
    <section id="about" className="py-22 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span 
                className="text-secondary-foreground text-sm font-medium tracking-wider uppercase"
              >
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building efficient web applications,
              <span className="font-serif italic font-normal text-white"> one feature at a time.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
             <p>
                I'm a Full Stack Web Developer specializing in the MERN stack, focused on building practical web applications that balance functionality, performance, and clean user experience.
              </p>
              <p>
                I work with React, Node.js, Express, and MongoDB, along with MySQL for relational data. My focus is on building well-structured frontend interfaces and scalable backend systems with clean API design.
              </p>
              <p>
                I build full-stack projects, integrate third-party APIs, and deploy applications using modern tools like Vercel. Most of my learning comes from building real projects and improving them over time.
              </p> 
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I focus on building reliable and maintainable web applications that solve real problems, with an emphasis on clean architecture, performance, and user experience across the full stack."
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{animationDelay: `${(idx + 1) * 100}ms`}}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About