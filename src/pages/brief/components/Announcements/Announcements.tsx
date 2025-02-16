import { fetchAnnouncements } from '../../../../shared/api/apiBrief';
import { useDataFetch } from '../../../../shared/hooks/useDataFetch';
import { Card } from '../../../../shared/ui/Card/Card';

export function Announcements() {
  const [error, announcements, isPending] = useDataFetch(fetchAnnouncements);

  return (
    <Card>
      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {announcements &&
        announcements.map((item) => <div key={item.id}>{item.category}</div>)}
    </Card>
  );
}
