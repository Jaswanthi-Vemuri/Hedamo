import { Product } from "./ProductTable";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar, Legend } from "recharts";

type ScoreChartsProps = {
  products: Product[];
};

export default function ScoreCharts({ products }: ScoreChartsProps) {
  const barData = products.map((p) => ({
    name: p.productName,
    score: p.score,
  }));

  const avgScore =
    products.length > 0
      ? Math.round(
          products.reduce((sum, p) => sum + p.score, 0) / products.length
        )
      : 0;

  const radialData = [
    {
      name: "Performance",
      score: avgScore,
      fill: "#38bdf8",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
      <div>
        <div className="font-bold mb-2">Transparency Scores (Bar)</div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="score" fill="#38bdf8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <div className="font-bold mb-2">Performance Score (Circle)</div>
        <ResponsiveContainer width="100%" height={250}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={105}
            barSize={18}
            data={radialData}
            startAngle={90}
            endAngle={450}
          >
            <RadialBar
              background
              dataKey="score"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="text-center mt-2 text-xl font-medium text-blue-800">
          {avgScore}%
        </div>
      </div>
    </div>
  );
}
