import Image from 'next/image';
import css from './styles.module.css';
import increaseArrow from './img/increase.svg';
import decreaseArrow from './img/decrease.svg';
import clsx from 'clsx';

type Props = {
  id: string;
  title: string;
  value: number;
  active: boolean;
  handleActive: (id: string) => void;
  increase?: boolean;
  percent?: number;
};

export function StatsCard({
  id,
  title,
  value,
  active,
  handleActive,
  percent,
  increase,
}: Props) {
  return (
    <div
      onClick={() => handleActive(id)}
      className={clsx(css.wrapper, active && css.active)}
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
