import { titlesStats } from './data';
import { Chart } from '../Chart/Chart';
import css from './styles.module.css';
import { useState } from 'react';
import { Button, Card, SecondaryTitle, StatsTab } from '../../shared';

export function Stats() {
  const [activeId, setActiveId] = useState(titlesStats[0].id);

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
          <StatsTab
            key={item.id}
            title={item.title}
            percent={item.percent}
            value={item.value}
            isIncrease={item.increase}
            handleActive={() => setActiveId(item.id)}
            isActive={item.id === activeId}
          />
        ))}
      </div>

      <Chart id={activeId} />
    </Card>
  );
}
