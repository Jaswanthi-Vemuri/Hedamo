import { Product } from "./ProductTable";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";

type OverallCircleProps = {
  products?: Product[];
};

export default function OverallCircle({ products }: OverallCircleProps) {
  const productsSafe = Array.isArray(products) ? products : [];
  const avgScore =
    productsSafe.length > 0
      ? Math.round(
          productsSafe.reduce((sum, p) => sum + p.score, 0) / productsSafe.length
        )
      : 0;

  const data = [
    { name: "Score", value: avgScore, fill: "#38bdf8" },
    { name: "Remainder", value: 100 - avgScore, fill: "#d1d5db" }, // stone-300
  ];

  return (
    <div className="flex flex-col items-center my-6 w-full">
      <div className="font-bold mb-2">Overall Performance</div>
      <div className="relative w-full max-w-xs h-[250px]">
        <ResponsiveContainer width="100%" height={250}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            startAngle={90}
            endAngle={450}
            data={data}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar
              dataKey="value"
              cornerRadius={12}
              background={{ fill: "#d1d5db" }}
            >
            </RadialBar>
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-blue-800">
          {avgScore}%
        </div>
      </div>
    </div>
  );
}
