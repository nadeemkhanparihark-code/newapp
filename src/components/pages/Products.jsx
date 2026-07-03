import productsData from '../../data/products.json';
import '../../styles/products.css';

const productImages = [
  'https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg?auto=compress&cs=tinysrgb&w=400',
];

const ProductsPage = () => {
  return (
    <main>
      <section className="products-section">
        <h1 className="products-title">Our Products</h1>
        <div className="products-grid">
          {productsData.map((product, index) => (
            <div key={product.id} className="product-card">
              <img
                src={productImages[index % productImages.length]}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="product-price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
