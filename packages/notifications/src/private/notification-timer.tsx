import React, { useEffect, useState } from 'react';

import { ColorCategory } from '@uireact/foundation';

import styles from '../ui-notification.scss';

type NotificationTimerProps = {
  time: number;
  category: ColorCategory;
};

export const NotificationTimer: React.FC<NotificationTimerProps> = ({ time, category }: NotificationTimerProps) => { 
  const [width, setWidth] = useState(1);

  useEffect(() => {
    const intervalMs = 10;
    const step = intervalMs * 100 / time;

    const timer = setInterval(() => {
      setWidth(width + step);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [time, width]);

  return (
    <div className={styles.timerWrapper}>
      <div className={`${styles.timerProgress} bg-${category}-200`} style={{ width: `${width}%` }} />
    </div>
  );
};