import { Product } from "./ProductTable";

type ProductDetailsProps = {
  product: Product;
  onClose: () => void;
};

export default function ProductDetails({ product, onClose }: ProductDetailsProps) {
  return (
    <div className="p-4 bg-white rounded shadow mt-4 max-w-lg">
      <div className="flex items-center mb-2">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold mr-4">
          {product.score}
        </div>
        <div>
          <div className="font-bold text-xl">{product.productName}</div>
          <div className="text-sm text-gray-500">{product.explanation}</div>
        </div>
        <button className="ml-auto text-gray-400 hover:text-gray-800" onClick={onClose}>&times;</button>
      </div>
      <div className="mt-3">
        <div className="font-semibold mb-2">AI Suggestions:</div>
        <ul className="pl-4 list-disc space-y-1">
          {product.suggestions.map((s, idx) => (
            <li key={idx}>{s}</li>
          ))}
        </ul>
      </div>
      {product.flags.length > 0 && (
        <div className="mt-3">
          <div className="font-semibold mb-2">Risk Flags:</div>
          <div className="flex gap-2">
            {product.flags.map((f, idx) => (
              <span
                key={idx}
                className={`px-2 py-1 rounded text-xs font-bold ${
                  f.toLowerCase().includes("unverified") ? "bg-red-400 text-white" : "bg-yellow-300"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
