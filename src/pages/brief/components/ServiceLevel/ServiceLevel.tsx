import { Slide } from '../../../../ui';
import { CardInfo } from '../../../../ui/CardInfo/CardInfo';
import css from './styles.module.css';

export function ServiceLevel() {
  const level = 35; /* Можно поменять на другой уровень */

  return (
    <CardInfo
      title="Уровень сервиса"
      description="Спасибо, что следуете правилам, — за это положены преимущества"
      descriptionTitle="У вас высокий уровень"
    >
      <div className={css.slides}>
        {level <= 35 ? (
          <Slide value={level} width={'35%'} minValue={0} maxValue={35} />
        ) : (
          <Slide width={'35%'} />
        )}

        {level > 35 ? (
          <Slide value={level} width={'65%'} minValue={36} maxValue={100} />
        ) : (
          <Slide width={'65%'} />
        )}
      </div>
    </CardInfo>
  );
}
