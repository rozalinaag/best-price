import { Button, SecondaryTitle, StatsCard } from '../../../../ui';
import { Card } from '../../../../ui/Card/Card';
import { titlesStats } from './data';
import { Chart } from '../Chart/Chart';
import css from './styles.module.css';
import { useState } from 'react';

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
          <StatsCard
            key={item.id}
            id={item.id}
            title={item.title}
            percent={item.percent}
            value={item.value}
            increase={item.increase}
            handleActive={(id: string) => setActiveId(id)}
            active={item.id === activeId}
          />
        ))}
      </div>

      <Chart id={activeId} />
    </Card>
  );
}
