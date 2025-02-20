import { useDataFetch } from '../../../../hooks/useDataFetch';
import { Announcement } from '../../../../types';
import { Card } from '../../../../components/Card/Card';
import { Line } from './Line/Line';
import css from './styles.module.css';

export function Announcements() {
  const [error, announcements, isPending] =
    useDataFetch<Announcement>('api/announcements');

  return (
    <Card>
      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className={css.content}>
        {announcements &&
          announcements.map((item) => (
            <Line
              key={item.id}
              title={item.category}
              value={item.id}
              color={item.color}
            />
          ))}
      </div>
    </Card>
  );
}
