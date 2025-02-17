import { Button, SecondaryTitle } from '../../../../shared/ui';
import { Card } from '../../../../shared/ui/Card/Card';
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
