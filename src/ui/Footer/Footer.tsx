import css from './styles.module.css';
import clsx from 'clsx';
import location from './img/location.png';
import mobile from './img/mobile.png';
import social from './img/social.png';
import aboutUs from './img/aboutUs.png';
import bestPrice from './img/bestPrice.png';
import Image from 'next/image';

export function Footer() {
  return (
    <div className={css.wrapper}>
      <div className={clsx('container', css.content)}>
        <Image src={location} alt="location" />
        <Image src={mobile} alt="mobile" />
        <Image src={social} alt="social" />
        <Image src={aboutUs} alt="about" />
        <Image src={bestPrice} alt="bestPrice" />
      </div>
    </div>
  );
}
