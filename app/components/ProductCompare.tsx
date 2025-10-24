import { useState } from "react";
import { Product } from "./ProductTable";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

type ProductCompareProps = {
  products?: Product[];
};

const COLORS = ["#38bdf8", "#0284c7", "#fbbf24", "#f87171"];

export default function ProductCompare({ products }: ProductCompareProps) {
  // Safeguard: always use an array
  const productsSafe = Array.isArray(products) ? products : [];

  const [first, setFirst] = useState<string>("");
  const [second, setSecond] = useState<string>("");

  const firstProduct = productsSafe.find((p) => p.productName === first);
  const secondProduct = productsSafe.find((p) => p.productName === second);

  let data: any[] = [];
  if (firstProduct && secondProduct) {
    data = [
      { name: firstProduct.productName, value: firstProduct.score },
      { name: secondProduct.productName, value: secondProduct.score },
    ];
  }

  return (
    <div className="bg-white rounded shadow p-4 my-4 md:my-0 flex flex-col md:flex-row gap-6 items-center">
      <div className="flex flex-col gap-3">
        <label className="font-semibold mb-1">Select Product 1:</label>
        <select
          className="border rounded p-2"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        >
          <option value="">Choose...</option>
          {productsSafe.map((p) => (
            <option key={p.productName} value={p.productName}>
              {p.productName}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-3">
        <label className="font-semibold mb-1">Select Product 2:</label>
        <select
          className="border rounded p-2"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        >
          <option value="">Choose...</option>
          {productsSafe.map((p) => (
            <option key={p.productName} value={p.productName}>
              {p.productName}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1 min-w-[300px] h-64">
        {data.length === 2 ? (
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#38bdf8"
                label
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-gray-500 text-center mt-4">Pick two products to compare</div>
        )}
      </div>
    </div>
  );
}
