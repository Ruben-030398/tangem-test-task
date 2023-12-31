import ReactDOM from 'react-dom';
import clsx from 'clsx'
import { useRef } from 'react'

import { Button } from '../../../components'
import { ButtonVariant } from '../../../components/button'
import { CloseIcon } from '../../../icons'
import { useCardStore } from '../store'
import { useMediaQuery, useScrollListener } from '../../../hooks'

import { BreakPoints } from '../../../hooks/use-media-query'

import styles from './card.module.sass'


const Card = () => {
  const { closed, setClosed } = useCardStore();
  const cardRef = useRef<HTMLDivElement | null>(null);

  const isScrolled = useScrollListener(closed ? 0 : 120);

  const isTabPort = useMediaQuery(BreakPoints.TabPort);

  return (
    ReactDOM.createPortal(
      <div ref={cardRef} className={clsx(styles.card, { [styles.card_visible]: isScrolled && !closed })}>
        <div className={styles.card__content}>
          <Button onClick={() => setClosed(true)} className={styles.card__icon_btn} color={ButtonVariant.Dark}>
            <CloseIcon />
          </Button>
          <div className={styles.card__texts}>
            <h1 className={styles.title1}>
              Black Friday
            </h1>
            <h2 className={clsx(styles.title2, styles.title2_gold)}>
              10%OFF
            </h2>
            <span className={clsx(styles.text_bold, styles.text, styles.text_gray)}>
              Use code{' '}
              <span className={clsx(styles.text, styles.text_gold, styles.text_bold)}>
                10FRIDAY
              </span>
              {' '}at checkout
            </span>
            <Button className={styles.card__shop_btn} color={ButtonVariant.Dark}>
              <span>
                {isTabPort ? "Shop now" : "Shop now through Monday"}
              </span>
            </Button>
          </div>
        </div>
      </div>,
      document.body
    )

  )
}

export default Card