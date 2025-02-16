import { Title } from '../../shared/ui';
import { Announcements } from './components/Announcements/Announcements';
import { Stats } from './components/Stats/Stats';

export function BriefPage() {
  return (
    <main>
      <Title>Сводка</Title>
      <Stats />
      <Announcements />
    </main>
  );
}
