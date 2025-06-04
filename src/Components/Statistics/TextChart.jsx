import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';
import { CustomLegend } from './customLegend';

const data = [
  { name: 'iPhone 15 Pro Max', price: 88, total: 88, rating: 4 },
  { name: 'Samsung 7 Pro', price: 56, total: 56, rating: 3 },
  { name: 'Samsung S24 Ultra', price: 85, total: 85, rating: 5 },
  { name: 'Pixel 9 Pro', price: 70, total: 70, rating: 4 },
  { name: 'OnePlus 12', price: 35, total: 35, rating: 2 },
  { name: 'MacBook (M3 Pro)', price: 82, total: 82, rating: 4 },
  { name: 'Sony Xperia 1 VI', price: 70, total: 70, rating: 3 },
  { name: 'Nothing (3)', price: 100, total: 100, rating: 5 },
  { name: 'Dell XPS 16', price: 97, total: 97, rating: 5 },
  { name: 'Apple Ultra 2', price: 77, total: 77, rating: 5 },
  { name: 'Apple AirPods Pro 2', price: 85, total: 85, rating: 5 },
];

const TextChart = () => {
  return (
    <div className='container' style={{ width: '100%', height: 500 }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis ticks={[0, 20, 40, 60, 80, 100, 120]} />
          <Legend content={<CustomLegend></CustomLegend>}/>
          <Area
            type="monotone"
            dataKey="total"
            stroke="#7e22ce"
            fill="#7e22ce"
            fillOpacity={0.15}
          />
          <Bar
            dataKey="price"
            barSize={30}
            fill="#7e22ce"
            radius={[4, 4, 0, 0]}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TextChart;
