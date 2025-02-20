import { ReactNode } from 'react';
import css from './styles.module.css';

export function SecondaryTitle({ children }: { children: ReactNode }) {
  return <div className={css.title}>{children}</div>;
}
