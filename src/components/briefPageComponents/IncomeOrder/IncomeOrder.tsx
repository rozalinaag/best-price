import Image from 'next/image';
import { Income } from '../../../types';
import { Card } from '../../Card/Card';
import { Line } from './Line/Line';
import noData from './img/noData.png';
import css from './styles.module.css';

type Props = {
  incomeData: Income[] | null;
  error: string | null;
  isPending: boolean;
};

export function IncomeOrder({ error, incomeData, isPending }: Props) {
  return (
    <Card>
      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className={css.content}>
        {incomeData &&
          incomeData.map((item) => (
            <Line key={item.id} title={item.title} value={item.value} />
          ))}

        {incomeData?.length === 0 && (
          <Image className={css.image} src={noData} alt="noData" />
        )}
      </div>
    </Card>
  );
}
