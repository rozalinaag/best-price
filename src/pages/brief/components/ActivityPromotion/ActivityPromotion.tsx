import { InfoSlide, Slide } from '../../../../components';
import { CardInfo } from '../../../../components/CardInfo/CardInfo';
import css from './styles.module.css';

export function ActivityPromotion() {
  const numerator = 0.2;
  const denominator = 10;
  const level = (numerator / denominator) * 100;
  const days = '7 дней';
  const gradientColor = ['#F33939', '#F39039'];

  return (
    <CardInfo
      title="Активность продвижения"
      descriptionTitle="Продвиньте обьявления"
      description="Конкуренты активнее, чем вы"
    >
      <InfoSlide
        value={
          <div className={css.infoBlock}>
            <div>{numerator}</div>
            <div className={css.infoSecondary}>/</div>
            <div className={css.infoSecondary}>{denominator}</div>
          </div>
        }
        days={days}
      />
      <div className={css.slides}>
        {level <= 50 ? (
          <Slide
            value={level}
            width={'50%'}
            minValue={0}
            maxValue={50}
            startColor={gradientColor[0]}
            endColor={gradientColor[1]}
          />
        ) : (
          <Slide width={'50%'} />
        )}

        {level > 50 && level <= 80 ? (
          <Slide
            value={level}
            width={'30%'}
            minValue={51}
            maxValue={80}
            startColor={gradientColor[0]}
            endColor={gradientColor[1]}
          />
        ) : (
          <Slide width={'30%'} />
        )}

        {level > 80 ? (
          <Slide
            value={level}
            width={'20%'}
            minValue={81}
            maxValue={100}
            startColor={gradientColor[0]}
            endColor={gradientColor[1]}
          />
        ) : (
          <Slide width={'20%'} />
        )}
      </div>
    </CardInfo>
  );
}
