import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function GalleryPage() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div>
      <button className="toggle-button" onClick={toggleNav}>
        Menu
      </button>
      <nav className={`navbar ${isNavVisible ? 'visible' : ''}`} id="home">
        <div className="navbar-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Sample Menu</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    
    <div>
      <section className="banner">
        <h3>Food Gallery</h3>
        <hr />
      </section>

      <div className="masonry">
    <div className="mitem">
      <img className="img" src="https://i.ibb.co/T8PMxWf/IMG-6125.jpg" alt="" />
    </div>
    <div className="mitem">
      <img className="img" src="https://i.ibb.co/k1mMJ8k/IMG-8194.jpg" alt="" />
    </div>
    <div className="mitem">
      <img className="img" src="https://i.ibb.co/sVz0NCK/IMG-7043.jpg" alt="" />
    </div>
    <div className="mitem">
      <img className="img" src="https://i.ibb.co/S7g24LV/IMG-8187.jpg" alt="" />
    </div>
    <div className="mitem">
      <img className="img" src="https://i.ibb.co/NSfZdd4/IMG-7642.jpg" alt="" />
    </div>
    <div className="mitem">
      <img className="img" src="https://i.ibb.co/XjxvcYX/IMG-8189.jpg" alt="" />
    </div>
    <div className="mitem">
      <img className="img" src="https://i.ibb.co/tLzY6pZ/IMG-8190.jpg" alt="" />
    </div>
    <div className="mitem">
      <img className="img" src="https://i.ibb.co/5WQMP3B/IMG-8191.jpg" alt="" />
    </div>
    <div className="mitem">
      <img className="img" src="https://i.ibb.co/XzdPTCf/IMG-8195.jpg" alt="" />
    </div>
    <div className="mitem">
      <img className="img" src="https://i.ibb.co/61fB5c6/IMG-8196.jpg5" alt="" />
    </div>
      </div>

      <section className="footer">
        <header id="contact">
          <h3>Get in Touch</h3>
        </header>
        <form className="submit_form form" action="https://formsubmit.co/9eb8400d13809384a217392d8c97d16e" method="POST">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="message" placeholder="Message" required />
          <button className="submit" type="submit">Send</button>
        </form>
      </section>

      <div className="copyright">
        <p><a href="mailto:hello@cheftimmaslow.com">hello@cheftimmaslow.com</a></p>
        <p>&copy; 2023 | Made with &hearts; by <a href="https://mallorybae.com">Mallory Shackford</a></p>
      </div>
    </div>
    </div>
  );
}
