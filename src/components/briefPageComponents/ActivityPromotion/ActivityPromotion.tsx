import { CardInfo } from '../../CardInfo/CardInfo';
import { InfoSlide } from '../../InfoSlide/InfoSlide';
import { Bar } from '../../Bar/Bar';
import css from './styles.module.css';

const messages = {
  bad: {
    message: 'Продвиньте обьявления',
    description: 'Конкуренты активнее, чем вы',
  },
  middle: {
    message: 'Все хорошо, но можно лучше!',
    description: 'На равне с конкурентами',
  },
  good: {
    message: 'Идеально!',
    description: 'Лучше, чем все конкуренты!',
  },
};

export function ActivityPromotion() {
  const numerator = 0.5; /* Можно поменять на другое значение */
  const denominator = 10;
  const level = (numerator / denominator) * 100;
  const days = '7 дней';
  let message;
  let description;

  if (level <= 50) {
    message = messages.bad.message;
    description = messages.bad.description;
  } else if (level > 50 && level <= 80) {
    message = messages.middle.message;
    description = messages.middle.description;
  } else {
    message = messages.good.message;
    description = messages.good.description;
  }

  return (
    <CardInfo
      title="Активность продвижения"
      descriptionTitle={message}
      description={description}
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
        <Bar
          isDisabled={!(level <= 50)}
          value={level}
          width={'50%'}
          minValue={0}
          maxValue={50}
          startColor={'#F33939'}
          endColor={'#F39039'}
        />

        <Bar
          isDisabled={!(level > 50 && level <= 80)}
          value={level}
          width={'30%'}
          minValue={51}
          maxValue={80}
          startColor={'#F39039'}
          endColor={'#BFBF00'}
        />

        <Bar
          isDisabled={!(level > 80)}
          value={level}
          width={'20%'}
          minValue={81}
          maxValue={100}
          startColor={'#BFBF00'}
          endColor={'#7DBF00'}
        />
      </div>
    </CardInfo>
  );
}
