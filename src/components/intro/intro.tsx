/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */

import { useEffect, useState } from "react";
import { Cell, Grid } from "styled-css-grid";
import { useMediaQuery } from "react-responsive";

import iss from '../../assets/iss2.png';

import "bulma/css/bulma.min.css";
import styles from "./intro.module.css";
import { Button, Content } from "react-bulma-components";
import { Link } from "react-router-dom";

type IntroProps = {};

function Intro(props: IntroProps) {
  const s = useMediaQuery({ query: "(max-width: 481px)" });
  const m = useMediaQuery({ query: "(max-width: 1100px)" });

  return (
    <div className={styles.intro}>
      <div className={styles.bannerimgContainer}>
        <img className={styles.bannerimg} src={iss} alt="banner"></img>
      </div>
      <div className={styles.bottom}>
        <Grid className={styles.grid} columns={40}>
          <Cell width={1}></Cell>
          <Cell className={styles.cell} width={15}>
            <div className={styles.introFooter}>
              <pre>R I S E !</pre>
            </div>
            <Grid columns={20} className={styles.footerContainer}>
              <Cell width={2}></Cell>
              <Cell width={3}>
                <p className={styles.arrowLeft}></p>
              </Cell>
              <Cell width={10}>
                <Link className={styles.glowOnHover} to="https://docs.geniusrise.ai">genius</Link>
              </Cell>
              <Cell width={3}>
                <p className={styles.arrowRight}></p>
              </Cell>
            </Grid>
          </Cell>
          <Cell width={22}></Cell>
        </Grid>
      </div>
    </div>
  );
}

export { Intro };
