import { useEffect, useState } from 'react';

import { formatAMPM } from '../utils';
import { Battery, Connection, WiFI } from '../../../icons';
import { useMediaQuery } from '../../../hooks';
import { BreakPoints } from '../../../hooks/use-media-query';

import styles from './mobile-header.module.sass';

const ONE_MINUTE = 1000 * 60

const MobileHeader = () => {
  const [time, setTime] = useState(() => formatAMPM(new Date()));

  const isMobileView = useMediaQuery(BreakPoints.Mobile);
  
  useEffect(() => {
    if (isMobileView) {
      const intervalId = setInterval(() => {
        setTime(formatAMPM(new Date()))
      }, Math.min(new Date().getSeconds(), ONE_MINUTE));

      return () => {
        clearInterval(intervalId);
      }
    }
  }, [isMobileView]);

  if (!isMobileView) return null;

  return (
    <div className={styles.mobile_header}>
      <div className={styles.mobile_header__time}>
        <span>
          {time}
        </span>
      </div>
      <div className={styles.mobile_header__widgets}>
        <Connection />
        <WiFI />
        <Battery />
      </div>
    </div>
  )
}

export default MobileHeader