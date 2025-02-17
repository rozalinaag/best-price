import { useDataFetch } from 'src/hooks/useDataFetch';
import { Card } from '#src/shared/ui/Card/Card.tsx';
import { Announcement } from '#src/types/index.ts';

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
