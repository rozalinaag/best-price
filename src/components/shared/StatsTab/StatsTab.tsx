import Image from 'next/image';
import css from './styles.module.css';
import increaseArrow from './img/increase.svg';
import decreaseArrow from './img/decrease.svg';
import clsx from 'clsx';

type Props = {
  title: string;
  value: number;
  isActive: boolean;
  handleActive: () => void;
  isIncrease?: boolean;
  percent?: number;
};

export function StatsTab({
  title,
  value,
  isActive,
  handleActive,
  percent,
  isIncrease,
}: Props) {
  return (
    <div
      onClick={handleActive}
      className={clsx(css.wrapper, isActive && css.active)}
    >
      <div className={css.title}>{title}</div>

      <div className={css.content}>
        <div className={css.value}>{value}</div>
        {percent && (
          <div className={isIncrease ? css.increase : css.decrease}>
            {isIncrease ? (
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
