import { Title } from '../../shared/ui';
import { Announcements } from './components/Announcements/Announcements';
import { IncomeOrder } from './components/IncomeOrder/IncomeOrder';
import { Stats } from './components/Stats/Stats';

export function BriefPage() {
  return (
    <main>
      <Title>Сводка</Title>
      <Stats />
      <IncomeOrder />
      <Announcements />
    </main>
  );
}
