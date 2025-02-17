// src/layouts/MainLayout.tsx
import React from 'react';
import { Footer, Header, LeftMenu } from '../shared/ui';
import css from './styles.module.css';
import clsx from 'clsx';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <div className={clsx('container', css.page)}>
        <LeftMenu /> <div className={css.content}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};
