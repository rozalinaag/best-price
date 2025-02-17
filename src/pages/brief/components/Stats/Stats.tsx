import { Card } from '#src/shared/ui/Card/Card.tsx';
import { Button, SecondaryTitle } from '#src/shared/ui/index.ts';
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
    </Card>
  );
}
