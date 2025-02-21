import {
  Announcements,
  IncomeOrder,
  ActivityPromotion,
  Stats,
  ServiceLevel,
} from '../../components/briefPageComponents';
import css from './styles.module.css';
import { Announcement, Income } from '../../types';
import { useDataFetch } from '../../hooks/useDataFetch';
import { Title } from '../../components/shared';

export default function BriefPage() {
  const [errorIncome, incomeData, isPendingIncome] =
    useDataFetch<Income>('/api/income');

  const [errorAnnouncements, announcementsData, isPendingAnnouncements] =
    useDataFetch<Announcement>('api/announcements');

  return (
    <main>
      <Title>Сводка</Title>

      <div className={css.stats}>
        <Stats />
      </div>

      <div className={css.content}>
        <div className={css.row}>
          <IncomeOrder
            error={errorIncome}
            incomeData={incomeData}
            isPending={isPendingIncome}
          />
          <Announcements
            error={errorAnnouncements}
            announcementsData={announcementsData}
            isPending={isPendingAnnouncements}
          />
        </div>

        <div className={css.row}>
          <ServiceLevel />
          <ActivityPromotion />
        </div>
      </div>
    </main>
  );
}
