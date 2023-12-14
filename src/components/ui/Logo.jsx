import React from "react";

import styles from "./uiComponents.module.css";
import { LinkElement } from "./LinkElement";
import { Typography } from "./Typography";

export function Logo() {
  return (
    <div className={styles["logo"]}>
      <picture aria-label="site-logo">
        <source srcSet="/images/logo-new-violet.png" />
        <img
          src="/images/logo-new-violet.png"
          height="25"
          width="25"
          alt="site-logo"
        />
      </picture>

      <div className={styles["title"]}>
        <LinkElement to="/" aria-label="to-home-page">
          <Typography variant="smallHeadline500">Afforai</Typography>
        </LinkElement>
      </div>
    </div>
  );
}
