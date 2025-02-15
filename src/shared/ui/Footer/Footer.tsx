import css from './styles.module.css';
import clsx from 'clsx';
import location from './img/location.png';
import mobile from './img/mobile.png';
import social from './img/social.png';
import aboutUs from './img/aboutUs.png';
import bestPrice from './img/bestPrice.png';

export function Footer() {
  return (
    <div className={css.wrapper}>
      <div className={clsx('container', css.content)}>
        <img src={location} alt="location" />
        <img src={mobile} alt="mobile" />
        <img src={social} alt="social" />
        <img src={aboutUs} alt="about" />
        <img src={bestPrice} alt="bestPrice" />
      </div>
    </div>
  );
}
