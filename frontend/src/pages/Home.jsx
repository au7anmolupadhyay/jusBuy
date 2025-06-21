import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f" alt="Hero" className="w-full max-w-2xl rounded-lg shadow mb-8" />
      <h1 className="text-4xl font-bold mb-4">NO EXCUSES // ALL SEASONS</h1>
      <p className="mb-6 text-lg text-gray-600">Heavyweight Collection. Shop the latest men's apparel.</p>
      <Link to="/products" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Shop Now</Link>
    </div>
  );
} 