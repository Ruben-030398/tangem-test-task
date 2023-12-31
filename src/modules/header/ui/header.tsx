import clsx from "clsx";
import { useState } from "react";

import { Button } from "../../../components"
import { ButtonVariant } from "../../../components/button"

import { ArrowRight, CloseIcon } from "../../../icons";

import { useMediaQuery } from "../../../hooks";
import { BreakPoints } from "../../../hooks/use-media-query";

import styles from './header.module.sass'

function Header() {
  const [shopBtnVisible, setShopButtonVisible] = useState(true);

  const isTabPort = useMediaQuery(BreakPoints.TabPort)

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <span className={clsx(styles.text, styles.text_bold)}>
          Black Friday,{' '}
          <span className={clsx(styles.text, styles.header__date)}>24-27 Nov</span>
        </span>
        <span className={styles.header__dot} />
        <span className={clsx(styles.text, styles.text_bold, styles.text_gold)}>10%OFF</span>
        <span className={styles.header__dot} />
        <span className={clsx(styles.text, styles.header__offer)}>
          <span>Use code{' '}</span>
          <span className={clsx(styles.text, styles.text_bold, styles.text_gold)}>
            10FRIDAY{' '}
          </span>
          <span>
            at checkout
          </span>
        </span>
      </div>
      {shopBtnVisible &&
        <>
          {!isTabPort ? <Button color={ButtonVariant.Light}>
            <span className={styles.text_gradient}>
              Shop now
            </span>
          </Button> :
            <Button className={styles.header__icon_btn} color={ButtonVariant.Dark}>
              <ArrowRight />
            </Button>
          }

          <Button 
            onClick={() => setShopButtonVisible(false)} 
            className={clsx(styles.header__icon_btn, styles.header__close_btn)} 
            color={ButtonVariant.Dark}
          >
            <CloseIcon />
          </Button>
        </>
      }
    </header>
  )
}

export default Header