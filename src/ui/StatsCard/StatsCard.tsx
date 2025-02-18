import css from './styles.module.css';
import clsx from 'clsx';

type Props = {
  title: string;
  value: number;
  increase: boolean;
  active: boolean;
  percent?: number;
};

export function StatsCard({ title, value, increase, active, percent }: Props) {
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
