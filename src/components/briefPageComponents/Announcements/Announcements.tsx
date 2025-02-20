import { Announcement } from '../../../types';
import { Card } from '../../Card/Card';
import { Line } from './Line/Line';
import css from './styles.module.css';

type Props = {
  error: string | null;
  announcementsData: Announcement[] | null;
  isPending: boolean;
};

export function Announcements({ error, announcementsData, isPending }: Props) {
  return (
    <Card>
      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className={css.content}>
        {announcementsData &&
          announcementsData.map((item) => (
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
