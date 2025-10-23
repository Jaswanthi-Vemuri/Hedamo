// components/ProductTable.js
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../utils/fetchProducts';
const getScoreColor = (score) => {
  if (score > 75) return 'bg-green-200';
  if (score > 50) return 'bg-yellow-200';
  return 'bg-red-200';
};

export default function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Product Name</th>
            <th className="py-2 px-4 text-left">Score</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Details</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td className="py-2 px-4">{p.productName}</td>
              <td className={`py-2 px-4 ${getScoreColor(p.score)}`}>{p.score}</td>
              <td className="py-2 px-4">{p.status}</td>
              <td className="py-2 px-4">
                <button
  className="text-blue-600 underline"
  onClick={() => onView(p)}
>
  View
</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
