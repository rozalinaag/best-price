import { Button, SecondaryTitle, StatsCard } from '../../../../ui';
import { Card } from '../../../../ui/Card/Card';
import { titlesStats } from './data';
import { Chart } from '../Chart/Chart';
import css from './styles.module.css';

export function Stats() {
  return (
    <Card className={css.stats}>
      <div className={css.title}>
        <SecondaryTitle>Статистика за 21 - 27 дек</SecondaryTitle>
        <div>
          <Button>Больше статистики</Button>
        </div>
      </div>

      <div className={css.tabs}>
        {titlesStats.map((item) => (
          <StatsCard
            title={item.title}
            percent={item.percent}
            value={item.value}
            increase={item.increase}
          />
        ))}
      </div>

      <Chart />
    </Card>
  );
}
