import css from './styles.module.css';
import arrow from './img/arrow.svg';
import Image from 'next/image';

type Props = {
  title: string;
  value: string;
  color: string;
};

export function Line({ title, value, color }: Props) {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <div style={{ backgroundColor: color }} className={css.circle}></div>{' '}
        {title}
      </div>
      <div className={css.value}>
        {value} <Image src={arrow} alt="->" width={6} height={11} />
      </div>
    </div>
  );
}
