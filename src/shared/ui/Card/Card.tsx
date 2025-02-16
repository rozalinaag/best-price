import { ReactNode } from 'react';
import css from './styles.module.css';

export function Card({ children }: { children: ReactNode }) {
  return <div className={css.wrapper}>{children}</div>;
}
