import menu from './img/menu.png';
import Image from 'next/image';

export function LeftMenu() {
  return (
    <div>
      <Image src={menu} alt="menu" />
    </div>
  );
}
