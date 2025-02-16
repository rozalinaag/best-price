import { fetchAnnouncements } from '../../shared/api/apiBrief';
import { useDataFetch } from '../../shared/hooks/useDataFetch';
import { Title } from '../../shared/ui';

export function BriefPage() {
  const [error, announcements, isPending] = useDataFetch(fetchAnnouncements);

  return (
    <main>
      <Title>Сводка</Title>
      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {announcements &&
        announcements.map((item) => <div key={item.id}>{item.text}</div>)}
    </main>
  );
}
