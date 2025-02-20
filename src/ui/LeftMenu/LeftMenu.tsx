import menu from './img/menu.png';
import Image from 'next/image';
import css from './styles.module.css';

export function LeftMenu() {
  return (
    <div className={css.wrapper}>
      <Image src={menu} alt="menu" />
    </div>
  );
}
