import { ReactNode } from 'react';
import css from './styles.module.css';

type Props = {
  children: ReactNode;
  info: string;
};

export function CardInfo({ children, info }: Props) {
  return (
    <div className={css.wrapper}>
      <div>{info}</div>
      {children}
    </div>
  );
}
