import { Title } from '../../shared/ui';
import { ActivityPromotion } from './components/ActivityPromotion/ActivityPromotion';
import { Announcements } from './components/Announcements/Announcements';
import { IncomeOrder } from './components/IncomeOrder/IncomeOrder';
import { ServiceLevel } from './components/ServiceLevel/ServiceLevel';
import { Stats } from './components/Stats/Stats';
import css from './styles.module.css';

export function BriefPage() {
  return (
    <main>
      <Title>Сводка</Title>

      <Stats />

      <div className={css.content}>
        <div className={css.row}>
          <IncomeOrder />
          <Announcements />
        </div>

        <div className={css.row}>
          <ServiceLevel />
          <ActivityPromotion />
        </div>
      </div>
    </main>
  );
}
