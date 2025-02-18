import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import css from './styles.module.css';

const data = [
  { name: '21, сб', value: 40 },
  { name: '22, вс', value: 60 },
  { name: '23, пн', value: 80 },
  { name: '24, вт', value: 70 },
  { name: '25, ср', value: null },
  { name: '26, чт', value: 90 },
  { name: '27, пт', value: 50 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: '#2A2C36',
          color: '#fff',
          padding: '4px 8px',
          borderRadius: '8px',
        }}
      >
        {payload[0].value}
      </div>
    );
  }
  return null;
};

export function Chart() {
  return (
    <ResponsiveContainer className={css.wrapper} width="100%" height={240}>
      <BarChart data={data}>
        <XAxis dataKey="name" tick={{ fill: '#636570' }} axisLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          background={{ fill: '#F6F5FA' }}
          dataKey="value"
          fill="#8FBA3E"
          radius={[8, 8, 8, 8]}
          barSize={94}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
