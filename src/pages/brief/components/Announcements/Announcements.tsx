import { fetchAnnouncements } from '../../../../shared/api/apiBrief';
import { useDataFetch } from '../../../../shared/hooks/useDataFetch';

export function Announcements() {
  const [error, announcements, isPending] = useDataFetch(fetchAnnouncements);

  return (
    <main>
      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {announcements &&
        announcements.map((item) => <div key={item.id}>{item.text}</div>)}
    </main>
  );
}
