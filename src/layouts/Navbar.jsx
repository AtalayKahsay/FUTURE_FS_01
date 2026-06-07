
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];


function Navbar() {
  return (
    <header className="fixed top-0 left-0 bg-transparent">
      <nav className="container mx-auto px-6 flex items-center">
        <a>
          AT<span>.</span>
        </a>

        <div>
          <div>
            {navLinks.map((link, index) => (
              <a href={link.href} key={index}>{link.label}</a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar