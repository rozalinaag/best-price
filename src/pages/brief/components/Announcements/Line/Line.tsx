import css from './styles.module.css';

type Props = {
  title: string;
  value: string;
};

export function Line({ title, value }: Props) {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>{title}</div>
      <div className={css.value}>{value}</div>
    </div>
  );
}
