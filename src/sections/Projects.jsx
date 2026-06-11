import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";

const projects = [
  {
  title: "Golden Fork Restaurant",
  description: "A fine dining restaurant website with a dynamic photo gallery, email newsletter subscription, and an immersive dark UI with gold accents.",
  image: "/projects/golden-fork.png",
  tags: ["React", "CSS", "JavaScript"],
  link: "#",
  github: "https://github.com/AtalayKahsay/FUTURE_FS_03",
},
  {
    title: "Personal Portfolio",
    description: "A modern developer portfolio with smooth animations, a glass-effect UI, and a clean layout to showcase skills and projects.",
    image: "/projects/atalay-portfolio.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/AtalayKahsay/FUTURE_FS_01",
  },
  {
    title: "Apple Clone",
    description: "A responsive clone of Apple's website with product showcases and a dynamic video section powered by the YouTube Data API.",
    image: "/projects/apple-clone.png",
    tags: ["React", "CSS", "JavaScript", "YouTube API"],
    link: "#",
    github: "https://github.com/AtalayKahsay/apple_project",
  }
];

function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            From concept
            <span className="font-serif italic font-normal text-white"
            > 
              {" "}
              to deployment.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of recent projects showcasing my skills across the full stack — from responsive front-end interfaces to RESTful APIs and database integration.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{animationDelay: `${(idx + 1) * 100}ms`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link !== "#" && (
                    <a 
                      href={project.link} 
                      className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a 
            href="https://github.com/AtalayKahsay" 
            target="_blank" 
            rel="noreferrer"
          >
            <AnimatedBorderButton>
              <FaGithub className="w-5 h-5" />
              View All Projects
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects