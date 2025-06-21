import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import { useCart } from '../store/CartContext';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow mb-4">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800">JusBuy</Link>
        <div className="flex items-center gap-6">
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/cart" className="relative hover:text-blue-600">
            Cart
            {cart.length > 0 && (
              <span className="ml-1 bg-blue-600 text-white rounded-full px-2 text-xs absolute -top-2 -right-4">{cart.length}</span>
            )}
          </Link>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="ml-2 text-red-500 hover:underline">Logout</button>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-600">Login</Link>
              <Link to="/register" className="hover:text-blue-600">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
} 