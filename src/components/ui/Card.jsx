import React from "react";

import PropTypes from "prop-types";

import { Typography } from "./Typography";
import styles from "./uiComponents.module.css";

export function Card(props) {
  const { imgSrc, caption, title, badge, sx, ...restProps } = props;
  const customSx = sx || null;

  return (
    <div className={styles["card"]} style={{ ...customSx }} {...restProps}>
      <div className={styles["imgSlot"]}>
        <img src={`${imgSrc}`} width="100%" height="100%" />
      </div>

      <div className={styles["caption"]}>
        <div>
          <Typography variant="smallHeadline400">{title}</Typography>
          {badge && badge}
        </div>
        <Typography variant="titleSmall400" sx={{ color: "rgb(82, 82, 82)" }}>
          {caption}
        </Typography>
      </div>
    </div>
  );
}

Card.propTypes = {
  badge: PropTypes.node,
  sx: PropTypes.object,
  caption: PropTypes.string,
  title: PropTypes.string,
  imgSrc: PropTypes.string,
};
