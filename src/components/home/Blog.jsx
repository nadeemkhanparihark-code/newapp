import { Link } from 'react-router-dom';
import blogData from '../../data/blog.json';
import '../../styles/blog.css';

const blogImages = [
  'https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=400',
];

const Blog = ({ limit = 3 }) => {
  const displayBlogs = blogData.slice(0, limit);

  return (
    <section className="blog-section">
      <h2 className="blog-title">Latest From Our Blog</h2>
      <div className="blog-grid">
        {displayBlogs.map((blog, index) => (
          <div key={blog.id} className="blog-card">
            <img
              src={blogImages[index % blogImages.length]}
              alt={blog.title}
              className="blog-image"
            />
            <div className="blog-content">
              <span className="blog-date">{blog.date}</span>
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <Link to={`/blog/${blog.slug}`} className="blog-link">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
      {limit < blogData.length && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/blog" className="btn btn-primary">
            View All Posts
          </Link>
        </div>
      )}
    </section>
  );
};

export default Blog;
