import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '21, сб', value: 40 },
  { name: '22, вс', value: 60 },
  { name: '23, пн', value: 80 },
  { name: '24, вт', value: 70 },
  { name: '25, ср', value: 100 },
  { name: '26, чт', value: 90 },
  { name: '27, пт', value: 50 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#333', color: '#fff', padding: '5px', borderRadius: '5px' }}>
        {payload[0].value}
      </div>
    );
  }
  return null;
};

export function Chart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="name" tick={{ fill: '#666' }} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" fill="#8EB359" radius={[5, 5, 0, 0]} barSize={40} />
      </BarChart>
    </ResponsiveContainer>
  );
}
