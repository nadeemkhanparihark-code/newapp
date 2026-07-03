import { Link } from 'react-router-dom';
import '../../styles/about.css';

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="about-preview-container">
        <h2>About Agrofarm</h2>
        <p>
          We are committed to promoting sustainable agriculture and supporting
          farmers with modern techniques, quality seeds, and eco-friendly farming
          practices. Our goal is to improve crop yield while protecting nature
          and soil.
        </p>
        <Link to="/about" className="btn btn-primary">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
