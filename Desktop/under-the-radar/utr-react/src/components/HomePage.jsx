import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function HomePage() {
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
            <li><a href="#about">About</a></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/menu">Sample Menu</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    
{/* Header */}
<header>
<section className="banner">
  <div className="container">
    <div className="box">
      <h1 className="title">Under the Radar</h1>
      {/* <div className="container-two"> */}
        <img className="logo" src="src/assets/images/whitelogo.png" alt="logo"/>
      
    </div>
    {/* <div className="box overlay">
      <h2>Culinary</h2>
    </div> */}
  </div>
</section>

       
    </header>

  {/* Wrapper */}
<div className="wrapper">
    <h1 className="wrapper1">Serving Weston, Wayland, Wellesley, Brookline, and more! Boston Chef Tim Maslow offers his personal chef, catering, intimate dining, and meal delivery services.</h1>
</div>

{/* Main */}
<div className="row">
<div className="column">
    <a href="#about"><img src="src/assets/images/soup.png" alt="soup"></img></a>
    <p>The Chef</p>
    <span className="span">French-trained with over 20 years of culinary experience.</span>
</div>
<div className="column">
    <a href="gallery.html"><img src="src/assets/images/noods.png" alt="noodles"></img></a>
    <p>The Food</p>
    <span className="span">Inspired, seasonal, and bold. Our food has the passion of a life well traveled.</span>
</div>
<div className="column">
    <a href="#contact"><img src="src/assets/images/shrimp.png" alt="shrimp"></img></a>
    <p>The Services</p>
    <span className="span">Cooking is a craft -- let me bring my art to you.</span>
</div>
</div>

<section className="banner">
    <h3 >About the Chef</h3>
    <hr/>
</section>

{/* About */}
<div id="about" className="about">
    <p>Chef Tim Maslow is a renowned culinary artist who has made a name for     himself in the Boston, Massachusetts food scene.
  Maslow's cooking style is known for its bold flavors, unexpected combinations, and innovative techniques. He is particularly skilled at combining Eastern and Western flavors, blending Japanese and Korean influences with classic New England ingredients to create unique and unforgettable dishes. 
    <br/><br/>
  Maslow's dedication to using local and sustainable ingredients has also earned him praise from the food community. He is known for working closely with farmers and fishermen to source the freshest, most flavorful ingredients possible, and for his commitment to reducing waste and minimizing his environmental impact. Overall, Chef Tim Maslow is a true innovator in the culinary world, and his commitment to quality, sustainability, and creativity has made him one of the most exciting and influential chefs working today.</p>
     <img src="https://media.gettyimages.com/id/165357954/photo/tim-maslow-chef-at-strip-ts-was-photographed-in-watertown-mass-on-tuesday-march-5-2013-this-is.jpg?s=612x612&w=gi&k=20&c=Vc-HgDiJkei2JB9sXrm4UILmeXlT0POTUxx1gSRvkFE="></img>
</div>

<section className="banner">
    <h3>What We Offer</h3>
    <hr/>
</section>
<div className="flex-container">
    <div className="services">
    <a href="#contact"><h4>Meal Prep and Delivery</h4></a>
		<p>Enjoy fresh cooked food made daily with locally sourced ingredients designed to your tastes.</p>
    </div>

    <div className="services">
        <a href="#contact"><h4>Cooking Classes</h4></a>
		<p>In-home, hands-on cooking classes now available!</p>
    </div>

    <div className="services">
		<a href="#contact"><h4>Special Occasions</h4></a>
		<p>A curated menu and commitment to quality guarantee an exclusive experience that will make memories. </p>
    </div>
		
    <div className="services"><a href="#contact"><h4>Consultations and Mentorship</h4></a>
		<p>Need to fast-track your career? I'm here to help.</p>
    </div>
</div>
	<br/>
    <br/>
    <p className="pricing">
		*For pricing, please contact us 
        <a href="#contact"
           onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:hello@cheftimmaslow.com"
           }}
           ><strong> here</strong>.</a></p>
    <br/><br/>

{/* Footer */}
<section className="footer">
	<header id="contact">
        <h3>Get in Touch</h3>
        <h2><a href="tel:6465996609">Call 646.599.6609</a></h2>
    </header>
	<form className="submit_form form" action="https://formsubmit.co/9eb8400d13809384a217392d8c97d16e" method="POST">
        <input type="text" name="name" placeholder="Name" required/>
        <input type="email" name="email" placeholder="Email" required/>
        <textarea placeholder="Message" name="message" id="message" cols="30" rows="5"></textarea>
        <button className="submit" type="submit">Send</button>
	</form>	
</section>
	<div className="copyright">
		<p><a href="mailto:hello@cheftimmaslow.com">hello@cheftimmaslow.com</a></p>
		<p>&copy; 2023 | Made with &hearts; by <a href="https://mallorybae.com">Mallory Shackford</a> </p>
	</div>
    </div>
  )
}
