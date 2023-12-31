import { styled } from "classname-variants/react";
import clsx from "clsx";

import styles from './styles.module.sass';

export enum ButtonVariant {
  Dark ='dark',
  Light = 'light',
}

const Button = styled("button", {
  variants: {
    color: {
      [ButtonVariant.Dark]: clsx(styles.btn, styles.btn_dark),
      [ButtonVariant.Light]: clsx(styles.btn, styles.btn_light),
    },
  },
});

export default Button