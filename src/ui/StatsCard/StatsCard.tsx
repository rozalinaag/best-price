import Image from 'next/image';
import css from './styles.module.css';
import increaseArrow from './img/increase.svg';
import decreaseArrow from './img/decrease.svg';
import clsx from 'clsx';
import { useState } from 'react';

type Props = {
  title: string;
  value: number;
  increase?: boolean;
  percent?: number;
};

export function StatsCard({ title, value, percent, increase }: Props) {
  const [activeTab, setActiveTab] = useState<boolean>(false);

  const handlerActive = () => {
    setActiveTab((prev) => !prev);
  };

  return (
    <div
      onClick={handlerActive}
      className={clsx(css.wrapper, activeTab && css.active)}
    >
      <div className={css.title}>{title}</div>

      <div className={css.content}>
        <div className={css.value}>{value}</div>
        {percent && (
          <div className={increase ? css.increase : css.decrease}>
            {increase ? (
              <Image src={increaseArrow} width={8} height={9} alt="inc" />
            ) : (
              <Image src={decreaseArrow} width={8} height={9} alt="dec" />
            )}
            <div>{percent}%</div>
          </div>
        )}
      </div>
    </div>
  );
}
