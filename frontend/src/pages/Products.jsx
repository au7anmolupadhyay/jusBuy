import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/products`).then(res => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded shadow p-4 flex flex-col">
            <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-cover rounded mb-4" />
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="font-bold text-blue-600">${product.price.toFixed(2)}</span>
              <Link to={`/products/${product.id}`} className="text-blue-600 hover:underline">View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 