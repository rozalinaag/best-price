import { calculatePercentage } from './calculatePercentage';
import { interpolateColor } from './interpolateColor';
import css from './styles.module.css';

type Props = {
  isDisabled: boolean;
  width?: string;
  value?: number;
  minValue?: number;
  maxValue?: number;
  startColor?: string;
  endColor?: string;
};

export function Bar({
  isDisabled,
  width,
  value,
  minValue,
  maxValue,
  startColor,
  endColor,
}: Props) {
  let newValue = 0;

  if (value !== undefined && minValue !== undefined && maxValue !== undefined) {
    newValue = calculatePercentage(value, minValue, maxValue);

    if (newValue > 90) {
      newValue -= 15;
    }
  }

  return (
    <div
      className={css.wrapper}
      style={{
        width: width,
        background:
          !isDisabled && startColor && endColor
            ? `linear-gradient(to right, ${startColor}, ${endColor})`
            : '#dcdde5',
      }}
    >
      {!isDisabled && startColor && endColor && (
        <div
          className={css.circle}
          style={{
            left: `${newValue}%`,
            borderColor: interpolateColor(startColor, endColor, newValue),
          }}
        ></div>
      )}
    </div>
  );
}
