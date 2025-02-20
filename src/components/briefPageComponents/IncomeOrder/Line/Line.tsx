import css from './styles.module.css';

type Props = {
  title: string;
  value: number;
};

export function Line({ title, value }: Props) {
  const formattedNumber = new Intl.NumberFormat('ru-RU').format(value);

  return (
    <div className={css.wrapper}>
      <div className={css.title}>{title}</div>
      <div className={css.value}>{formattedNumber} ₽</div>
    </div>
  );
}
