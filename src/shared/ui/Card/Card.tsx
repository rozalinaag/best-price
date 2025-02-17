import { ReactNode } from 'react';
import css from './styles.module.css';
import clsx from 'clsx';

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={clsx(css.wrapper, className)}>{children}</div>;
}
