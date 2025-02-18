import { useDataFetch } from '../../../../hooks/useDataFetch';
import { Announcement } from '../../../../types';
import { Card } from '../../../../ui/Card/Card';

export function Announcements() {
  const [error, announcements, isPending] =
    useDataFetch<Announcement>('api/announcements');

  return (
    <Card>
      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {announcements &&
        announcements.map((item) => <div key={item.id}>{item.category}</div>)}
    </Card>
  );
}
