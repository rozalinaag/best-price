import { ReactNode, useState } from 'react';
import css from './styles.module.css';
import clsx from 'clsx';

type TooltipProps = {
  text: string;
  children: ReactNode;
  className?: string;
};

export function Tooltip({ text, children, className }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={clsx(css.tooltipWrapper, className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div className={css.tooltip}>{text}</div>}
    </div>
  );
}
