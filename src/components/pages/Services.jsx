import servicesData from '../../data/services.json';
import '../../styles/services.css';

const ServicesPage = () => {
  return (
    <main>
      <section className="services-section">
        <h1 className="services-title">Our Services</h1>
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;