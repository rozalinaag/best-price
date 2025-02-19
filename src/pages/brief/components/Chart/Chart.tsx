import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import css from './styles.module.css';
import { weekStats } from './data';

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
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

export function Chart({ id }: { id: string }) {
  const data =
    weekStats.find((item) => item.id === id)?.value || weekStats[0].value;

  return (
    <ResponsiveContainer className={css.wrapper} width="100%" height={240}>
      <BarChart data={data}>
        <XAxis dataKey="name" tick={{ fill: '#636570' }} axisLine={false} />
        <Tooltip
          cursor={false}
          content={<CustomTooltip />}
          animationDuration={0}
        />
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
