import { RadialBarChart, RadialBar, Tooltip, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function ScoreCharts({ products }) {
  const data = products.map(p => ({ name: p.productName, score: p.score }));

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <RadialBarChart width={200} height={200} innerRadius="80%" outerRadius="100%" data={data}>
          <RadialBar minAngle={15} label background clockWise={true} dataKey='score' />
          <Tooltip />
        </RadialBarChart>
      </div>
      <div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="score" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
