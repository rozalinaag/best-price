import { ReactNode } from 'react';
import css from './styles.module.css';

type Props = {
  children: ReactNode;
};

export function Button({ children }: Props) {
  return <button className={css.wrapper}>{children}</button>;
}
