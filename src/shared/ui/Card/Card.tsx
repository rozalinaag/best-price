import { ReactNode } from 'react';
import css from './styles.module.css';
import clsx from 'clsx';

export function Card({
  children,
  style,
}: {
  children: ReactNode;
  style: string;
}) {
  return <div className={clsx(css.wrapper, style)}>{children}</div>;
}
