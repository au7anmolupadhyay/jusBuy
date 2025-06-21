import { useEffect, useState } from 'react';
import { useAuth } from '../store/AuthContext';
import axios from 'axios';

export default function OrderSummary() {
  const { token } = useAuth();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => {
      setOrder(res.data[res.data.length - 1]);
      setLoading(false);
    });
  }, [token]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!order) return <div className="text-center mt-10">No recent order found.</div>;

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
      <div className="mb-2 text-gray-600">Order Date: {new Date(order.orderDate).toLocaleString()}</div>
      <ul className="divide-y mb-4">
        {order.orderItems.map(item => (
          <li key={item.id} className="flex items-center gap-4 py-4">
            <img src={item.product.imageUrl} alt={item.product.name} className="h-12 w-12 object-cover rounded" />
            <div className="flex-1">
              <div className="font-semibold">{item.product.name}</div>
              <div className="text-gray-600">Qty: {item.quantity}</div>
            </div>
            <div className="text-blue-600 font-bold">${(item.price * item.quantity).toFixed(2)}</div>
          </li>
        ))}
      </ul>
      <div className="font-bold text-lg mb-4">Total: ${order.total.toFixed(2)}</div>
      <div className="text-green-600 font-semibold">Thank you for your purchase!</div>
    </div>
  );
} 