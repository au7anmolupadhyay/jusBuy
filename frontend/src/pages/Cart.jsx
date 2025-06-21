import { useCart } from '../store/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, loading } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <>
          <ul className="divide-y">
            {cart.map(item => (
              <li key={item.id} className="flex items-center gap-4 py-4">
                <img src={item.product.imageUrl} alt={item.product.name} className="h-16 w-16 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{item.product.name}</div>
                  <div className="text-gray-600">Qty: {item.quantity}</div>
                  <div className="text-blue-600 font-bold">${(item.product.price * item.quantity).toFixed(2)}</div>
                </div>
                <button onClick={() => removeFromCart(item.product.id)} className="text-red-500 hover:underline">Remove</button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <span className="font-bold text-lg">Total: ${total.toFixed(2)}</span>
            <button onClick={() => navigate('/checkout')} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
} 