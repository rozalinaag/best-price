import { ReactNode } from 'react';
import css from './styles.module.css';
import { SecondaryTitle } from '../SecondaryTitle/SecondaryTitle';

type Props = {
  children: ReactNode;
  title: string;
  descriptionTitle: string;
  description: string;
};

export function CardInfo({
  title,
  children,
  description,
  descriptionTitle,
}: Props) {
  return (
    <div className={css.wrapper}>
      <SecondaryTitle>{title}</SecondaryTitle>

      <div className={css.content}>{children}</div>

      <div className={css.under}>
        <div className={css.descriptionTitle}>{descriptionTitle}</div>
        <div className={css.description}>{description}</div>
      </div>
    </div>
  );
}
