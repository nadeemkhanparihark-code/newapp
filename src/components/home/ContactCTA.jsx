import { Link } from 'react-router-dom';
import '../../styles/contact.css';

const ContactCTA = () => {
  return (
    <section
      style={{
        backgroundColor: 'var(--primary-green)',
        padding: 'var(--spacing-3xl) var(--spacing-xl)',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          color: 'var(--white)',
          fontSize: 'var(--font-size-2xl)',
          marginBottom: 'var(--spacing-md)',
        }}
      >
        Ready to Transform Your Farm?
      </h2>
      <p
        style={{
          color: 'var(--white)',
          fontSize: 'var(--font-size-base)',
          marginBottom: 'var(--spacing-lg)',
          maxWidth: '600px',
          margin: '0 auto var(--spacing-lg)',
          opacity: 0.9,
        }}
      >
        Contact us today and let our experts help you achieve better yields with
        sustainable farming practices.
      </p>
      <Link
        to="/contact"
        className="btn btn-secondary"
        style={{ display: 'inline-block' }}
      >
        Contact Us
      </Link>
    </section>
  );
};

export default ContactCTA;
