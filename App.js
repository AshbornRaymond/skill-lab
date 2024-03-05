
// App.js
import React from 'react';
import './App.css';

// Importing images
import logo from './images/logo5.png'; // Change to logo image import
import heroVideo from './videos/vid1.mp4';

// Header component
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" /> {/* Change image source to logo */}
        { <h1>CB HeartCare</h1> }
      </div>
      <Navigation />
    </header>
  );
};

// Navigation component
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><button>Home</button></li>
        <li><button>About Us</button></li>
        <li><button>Services</button></li>
        <li><button>Appointments</button></li>
        <li><button>Contact Us</button></li>
      </ul>
    </nav>
  );
};

// Hero component
const Hero = () => {
  return (
    <section className="hero">
      <video src={heroVideo} autoPlay loop muted />
      <div className="hero-content">
        <h2>Welcome to Christian Barnard HeartCare</h2>
        <p>Your trusted partner in healthcare services.</p>
        <a href="https://en.wikipedia.org/wiki/Christiaan_Barnard">
          <button>Learn More about Sir Christian Barnard</button>
        </a>
      </div>
    </section>
  );
};


// Services component
const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-cards-container">
        <div className="service-card">
          <h3>Diagnostic Testing and Imaging</h3>
          <p>Comprehensive diagnostic testing and imaging services are essential for accurately assessing heart health. This may include electrocardiograms (ECG or EKG), echocardiograms, stress tests, cardiac catheterization, and various types of imaging studies such as MRI, CT scans, and cardiac ultrasound.</p>
        </div>
        <div className="service-card">
          <h3>Interventional Procedures</h3>
          <p>Advanced interventional procedures are crucial for treating various heart conditions effectively. This may include coronary angioplasty and stenting to open blocked arteries, implantation of pacemakers or defibrillators for arrhythmia management, and minimally invasive surgical procedures like angioplasty, stent placement, and valve repair or replacement.</p>
        </div>
      </div>
    </section>
  );
};

// Testimonials component
const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonial-container">
        <div className="testimonial">
          <p>"Great experience! The doctors are very caring and knowledgeable."</p>
          <p>- John Doe</p>
        </div>
        <div className="testimonial">
          <p>"I'm very impressed with the quality of service. Highly recommend!"</p>
          <p>- Jane Smith</p>
        </div>
        <div className="testimonial">
          <p>"Amazing healthcare services. The staff is friendly and professional."</p>
          <p>- Emily Johnson</p>
        </div>
        <div className="testimonial">
          <p>"Top-notch facilities and skilled medical professionals."</p>
          <p>- Michael Brown</p>
        </div>
        <div className="testimonial">
          <p>"Exceptional care provided by the entire team."</p>
          <p>- Sarah Wilson</p>
        </div>
        <div className="testimonial">
          <p>"Couldn't be happier with the treatment I received."</p>
          <p>- David Clark</p>
        </div>
        <div className="testimonial">
          <p>"Highly recommend to anyone seeking cardiac care."</p>
          <p>- Samantha Lee</p>
        </div>
        <div className="testimonial">
          <p>"Efficient service and a warm atmosphere. Thank you!"</p>
          <p>- Matthew Taylor</p>
        </div>
        <div className="testimonial">
          <p>"The doctors here saved my life. Forever grateful."</p>
          <p>- Olivia Martinez</p>
        </div>
        <div className="testimonial">
          <p>"Outstanding medical expertise combined with compassion."</p>
          <p>- William Harris</p>
        </div>
      </div>
    </section>
  );
};


// Footer component
const Footer = () => {
  return (
    <footer style={{ textAlign: 'center' }}>
      <p>&copy; 1999 Christian Barnard HeartCare. All rights reserved.</p>
    </footer>
  );
};

// Main App component
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;



