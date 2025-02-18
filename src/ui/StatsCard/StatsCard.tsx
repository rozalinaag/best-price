import css from './styles.module.css';
import clsx from 'clsx';

type Props = {
  title: string;
  value: number;
  active: boolean;
  increase?: boolean;
  percent?: number;
};

export function StatsCard({ title, value, active, percent, increase }: Props) {
  return (
    <div className={clsx(css.wrapper, active && css.active)}>
      <div className={css.title}>{title}</div>

      <div className={css.content}>
        <div className={css.value}>{value}</div>
        {percent && (
          <div className={increase ? css.increase : css.decrease}>
            {percent}%
          </div>
        )}
      </div>
    </div>
  );
}
