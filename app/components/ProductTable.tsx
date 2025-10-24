export interface Product {
  productName: string;
  score: number;
  explanation: string;
  suggestions: string[];
  flags: string[];
  status: string;
}

type ProductTableProps = {
  products: Product[];
  onView: (product: Product) => void;
};

export default function ProductTable({ products, onView }: ProductTableProps) {
  const getScoreColor = (score: number) => {
    if (score > 75) return "bg-green-200 text-green-800";
    if (score > 50) return "bg-yellow-200 text-yellow-800";
    return "bg-red-200 text-red-800";
  };

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
              <td className={`py-2 px-4 rounded ${getScoreColor(p.score)}`}>{p.score}</td>
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
