const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];


function Navbar() {
  return (
    <header>
      <nav>
        <a href="">
          AT<span>.</span>
        </a>

        <div>
          <div>
            {navLinks.map((link) => (
              <a href={link.href}>{link.label}</a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar