const projects = [
  {
    title: "Apple Clone",
    description: "A responsive Apple website clone built with React, featuring product layouts and a dynamic video section that fetches content from Apple's YouTube channel using the YouTube Data API.",
    image: "/projects/apple-clone.png",
    tags: ["React", "CSS", "JavaScript", "YouTube API", "Responsive Design"],
    link: "#",
    github: "https://github.com/AtalayKahsay/apple_project"
  },
  {
  title: "Golden Fork Restaurant",
  description: "A fully responsive fine dining restaurant website built with React and modern CSS. Features a dynamic image gallery with auto-scroll, newsletter subscription with email validation, and a premium dark UI with elegant gold accents for an immersive dining experience.",
  image: "/projects/golden-fork.png",
  tags: ["React", "CSS", "JavaScript", "Vite"],
  link: "#",
  github: "https://github.com/AtalayKahsay/FUTURE_FS_03"
},
  {
    title: "Personal Portfolio",
    description: "A modern, responsive developer portfolio built with React and Tailwind CSS, featuring a glassmorphism UI, smooth animations, and a clean layout to professionally showcase skills and projects.",
    image: "/projects/atalay-portfolio.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    link: "#",
    github: "https://github.com/AtalayKahsay/FUTURE_FS_01"
  }
];

function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10"></div>
    </section>
  )
}

export default Projects