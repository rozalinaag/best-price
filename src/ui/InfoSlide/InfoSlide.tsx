import { ReactNode } from 'react';
import css from './styles.module.css';

type Props = {
  value: ReactNode;
  days: string;
};

export function InfoSlide({ value, days }: Props) {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>{value}</div>
      <div className={css.days}>За {days}</div>
    </div>
  );
}
