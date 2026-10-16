function Navbar({name}) {
  return (
    <header className="navbar">
      <nav className="container navbar-inner">
        <a className="logo">{name}</a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
         < li><a href="#about">About</a></li>
        < li><a href="#skill">Skills</a></li>
       < li><a href="#projects">Project</a></li>
       <li><a href="#education">Education</a></li>
      < li><a href="#contect">Contect</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
