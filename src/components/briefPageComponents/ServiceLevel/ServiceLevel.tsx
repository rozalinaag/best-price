import { Bar, CardInfo, InfoSlide } from '../../shared';
import css from './styles.module.css';

const messages = {
  bad: 'У вас низкий уровень',
  middle: 'У вас средний уровень',
  good: 'У вас высокий уровень',
};

export function ServiceLevel() {
  const level = 96; /* Можно поменять на другой уровень */
  const days = '30 дней';
  let titleLevel;

  if (level <= 35) {
    titleLevel = messages.bad;
  } else if (level > 35 && level < 75) {
    titleLevel = messages.middle;
  } else {
    titleLevel = messages.good;
  }

  return (
    <CardInfo
      title="Уровень сервиса"
      description="Спасибо, что следуете правилам, — за это положены преимущества"
      descriptionTitle={titleLevel}
    >
      <InfoSlide value={`${level} %`} days={days} />

      <div className={css.slides}>
        <Bar
          isDisabled={!(level <= 35)}
          value={level}
          width={'35%'}
          minValue={0}
          maxValue={35}
          startColor={'#F33939'}
          endColor={'#F39039'}
        />

        <Bar
          isDisabled={!(level > 35)}
          value={level}
          width={'65%'}
          minValue={36}
          maxValue={100}
          startColor={'#BFBF00'}
          endColor={'#7DBF00'}
        />
      </div>
    </CardInfo>
  );
}
