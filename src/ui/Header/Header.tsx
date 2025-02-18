import css from './styles.module.css';
import contentHeader from './img/contentHeader.png';
import Image from 'next/image';

export function Header() {
  return (
    <div className={css.wrapper}>
      <div className="container">
        <Image className={css.img} src={contentHeader} alt="header" />
      </div>
    </div>
  );
}
