import css from './styles.module.css';
import contentHeader from './img/contentHeader.png';

export function Header() {
  return (
    <div className={css.wrapper}>
      <div className="container">
        <img src={contentHeader} />
      </div>
    </div>
  );
}
