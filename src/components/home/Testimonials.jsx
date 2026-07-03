import testimonialsData from '../../data/testimonials.json';
import '../../styles/testimonials.css';

const Testimonials = () => {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Farmers Say</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={`https://i.pravatar.cc/150?img=${testimonial.id + 10}`}
              alt={testimonial.name}
              className="testimonial-avatar"
            />
            <div className="testimonial-stars">{renderStars(testimonial.rating)}</div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <span className="testimonial-role">{testimonial.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
