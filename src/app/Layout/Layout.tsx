import { ReactNode } from 'react';
import { Footer, Header } from '../../shared/ui';
import clsx from 'clsx';
import css from './styles.module.css';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className={css.wrapper}>
      <Header />
      <div className={clsx('container', css.page)}>{children}</div>
      <Footer />
    </div>
  );
}
