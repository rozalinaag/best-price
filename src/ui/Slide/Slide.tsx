import css from './styles.module.css';

type Props = {
  width?: string;
  value?: number;
  minValue?: number;
  maxValue?: number;
};

function calculatePercentage(x: number, min: number, max: number) {
  if (x <= min) return 0;
  if (x > max) return 100;
  return ((x - min) / (max - min)) * 100;
}

export function Slide({ width, value, minValue, maxValue }: Props) {
  let newValue = minValue;

  if (value !== undefined && minValue !== undefined && maxValue !== undefined) {
    newValue = calculatePercentage(value, minValue, maxValue);

    if (newValue > 90) {
      newValue -= 20;
    }
  }

  return (
    <div className={css.wrapper} style={{ width: width }}>
      {value !== undefined && (
        <div className={css.circle} style={{ left: `${newValue}%` }}></div>
      )}
    </div>
  );
}
