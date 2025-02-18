import Image from 'next/image';
import { useDataFetch } from '../../../../hooks/useDataFetch';
import { Income } from '../../../../types';
import { Card } from '../../../../ui/Card/Card';
import { Line } from './Line/Line';
import noData from './img/noData.png';
import css from './styles.module.css';

export function IncomeOrder() {
  const [error, incomes, isPending] = useDataFetch<Income>('/api/income');

  return (
    <Card>
      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className={css.content}>
        {incomes &&
          incomes.map((item) => (
            <Line key={item.id} title={item.title} value={item.value} />
          ))}
        {incomes?.length === 0 && (
          <Image className={css.image} src={noData} alt="noData" />
        )}
      </div>
    </Card>
  );
}
