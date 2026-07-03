import { Link } from 'react-router-dom';
import '../../styles/about.css';

const About = () => {
  const features = [
    { id: 1, text: 'Organic Farming', icon: '🌱' },
    { id: 2, text: 'Quality Seeds', icon: '🌾' },
    { id: 3, text: 'Expert Guidance', icon: '👨‍🌾' },
    { id: 4, text: 'Eco-Friendly', icon: '🌍' },
  ];

  return (
    <main>
      <section className="about-section">
        <h1 className="about-title">About Us</h1>
        <div className="about-container">
          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Farm field"
            />
          </div>
          <div className="about-content">
            <h2>Welcome to Agrofarm</h2>
            <p>
              We are committed to promoting sustainable agriculture and supporting
              farmers with modern techniques, quality seeds, and eco-friendly
              farming practices. Our goal is to improve crop yield while
              protecting nature and soil.
            </p>
            <p>
              Our vision is to empower farmers with knowledge and technology to
              create a greener and healthier future. We believe agriculture is the
              backbone of our nation and deserves respect and innovation.
            </p>
            <div className="about-features">
              {features.map((feature) => (
                <div key={feature.id} className="feature-item">
                  <span className="feature-icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'var(--spacing-xl)' }}>
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;