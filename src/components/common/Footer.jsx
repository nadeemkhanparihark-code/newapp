import footerData from '../../data/footerData.json';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {footerData.map((section) => (
          <div key={section.id} className="footer-section">
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        © 2025 Websol Techonsys. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
