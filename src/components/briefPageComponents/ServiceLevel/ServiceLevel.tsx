import { CardInfo } from '../../CardInfo/CardInfo';
import { InfoSlide } from '../../InfoSlide/InfoSlide';
import { Bar } from '../../Bar/Bar';
import css from './styles.module.css';

export function ServiceLevel() {
  const level = 100; /* Можно поменять на другой уровень */
  const days = '30 дней';
  const gradientColor = ['#BFBF00', '#7DBF00'];

  return (
    <CardInfo
      title="Уровень сервиса"
      description="Спасибо, что следуете правилам, — за это положены преимущества"
      descriptionTitle="У вас высокий уровень"
    >
      <InfoSlide value={`${level} %`} days={days} />

      <div className={css.slides}>
        {level <= 35 ? (
          <Bar
            value={level}
            width={'35%'}
            minValue={0}
            maxValue={35}
            startColor={gradientColor[0]}
            endColor={gradientColor[1]}
          />
        ) : (
          <Bar width={'35%'} />
        )}

        {level > 35 ? (
          <Bar
            value={level}
            width={'65%'}
            minValue={36}
            maxValue={100}
            startColor={gradientColor[0]}
            endColor={gradientColor[1]}
          />
        ) : (
          <Bar width={'65%'} />
        )}
      </div>
    </CardInfo>
  );
}
