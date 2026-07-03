import galleryData from '../../data/gallery.json';
import '../../styles/gallery.css';

const galleryImages = [
  'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=400',
];

const GalleryPage = () => {
  return (
    <main>
      <section className="gallery-section">
        <h1 className="gallery-title">Our Gallery</h1>
        <div className="gallery-grid">
          {galleryData.map((item, index) => (
            <div key={item.id} className="gallery-item">
              <img
                src={galleryImages[index % galleryImages.length]}
                alt={item.title}
              />
              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
