import React from "react";

import styles from "./footer.module.css";
import { ContentWrapper } from "../contentWrapper";
import { Typography } from "../../components/ui/Typography";
import { LinkElement } from "../../components/ui/LinkElement";
import { footerColumnLinks } from "./utils/constants";
import { Logo } from "../../components/ui/Logo";

export function Footer() {
  const columns = footerColumnLinks.map((col) => {
    return (
      <div key={col.heading}>
        <Typography
          variant="smallHeadline400"
          sx={{ color: "rgb(17, 17, 17)" }}
        >
          {col.heading}
        </Typography>
        {col.links.map((lnk) => {
          const isExternalLink = lnk.target;
          const anchor = lnk.anchor || null;
          return (
            <div key={lnk.label} className={styles["footerLink"]}>
              {isExternalLink ? (
                <a
                  target={lnk.target}
                  rel="noopener noreferrer"
                  href={lnk.to}
                  aria-label={`${lnk.label}`}
                >
                  <Typography
                    variant="titleSmall400"
                    sx={{ color: "rgb(82, 82, 82)" }}
                  >
                    {lnk.label}
                  </Typography>
                </a>
              ) : (
                <LinkElement
                  to={lnk.to}
                  anchor={anchor}
                  aria-label={`${lnk.label}`}
                >
                  <Typography
                    variant="titleSmall400"
                    sx={{ color: "rgb(82, 82, 82)" }}
                  >
                    {lnk.label}
                  </Typography>
                </LinkElement>
              )}
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <ContentWrapper>
      <footer className={styles["wrapper"]}>
        <div className={styles["slot1"]}>
          <Logo />
          <div
            style={{
              paddingRight: "50px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="titleSmall400"
              sx={{ color: "rgb(82, 82, 82)", lineHeight: "5px" }}
            >
              Afforai is your research tool in to damn near anything. Helping
              you summarise, translate, and withdraw data from documents.
            </Typography>
          </div>
          <div style={{ paddingRight: "50px", marginBottom: "20px" }}>
            <Typography
              variant="titleSmall400"
              sx={{ color: "rgb(82, 82, 82)" }}
            >
              Copyright © 2023 Afforai Inc. All rights reserved.
            </Typography>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <picture aria-label="top-post-badge">
              <source srcSet="/images/top-post-badge.svg" />
              <img
                src="/images/top-post-badge.svg"
                height="42"
                width="195"
                alt="top-post-badge"
              />
            </picture>
          </div>
          <Typography variant="smallHeadline400">Backed by</Typography>
          <div style={{ marginTop: "10px" }}>
            <picture aria-label="top-post-badge">
              <source srcSet="/images/sputnikatx.png" />
              <img
                src="/images/sputnikatx.png"
                height="46"
                width="137"
                alt="top-post-badge"
              />
            </picture>
          </div>
        </div>
        <div className={styles["slot2"]}>{columns}</div>
      </footer>
    </ContentWrapper>
  );
}
