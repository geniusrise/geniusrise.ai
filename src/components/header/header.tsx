/* eslint-disable react/jsx-no-target-blank */
import { Cell, Grid } from "styled-css-grid";
import { useMediaQuery } from "react-responsive";
// import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import styles from "./header.module.css";
import "bulma/css/bulma.min.css";
import { Menu, Section } from "react-bulma-components";

type HeaderProps = {};

function Header(props: HeaderProps) {
  const s = useMediaQuery({ query: "(max-width: 481px)" });
  const m = useMediaQuery({ query: "(max-width: 1100px)" });

  return (
    <div className={styles.container}>
      <Grid columns={10} flow="row" className={styles.grid}>
        {s ? (
          <></>
        ) : (
          <Cell width={2} center middle className={styles.cell}>
            <div className={styles.logo}>
              <img src={logo}></img>
            </div>
          </Cell>
        )}
        <Cell width={s ? 5 : m ? 6 : 6} center middle className={styles.cell}>
          <div className={styles.genius}>
            <p className={styles.neonText}>geniusrise</p>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.geniusAbout}>
            <p>
              A framework for creating geniuses
            </p>
          </div>
        </Cell>
        <Cell width={s ? 5 : m ? 2 : 2} className={styles.cell}>
          <Section className={styles.menu}>
            <Menu>
              <Menu.List title="">
                <Menu.List.Item>
                  <a className={styles.notionLink} href="https://docs.geniusrise.ai/" target="_blank">
                    {(s ? "" : "📖 ") + "Docs"}
                  </a>
                </Menu.List.Item>
                <Menu.List.Item>
                  <a className={styles.notionLink} href="https://github.com/geniusrise" target="_blank">
                    {(s ? "" : "💻 ") + "Github"}
                  </a>
                </Menu.List.Item>
                <Menu.List.Item>
                  <a className={styles.notionLink} href="https://geniusrise.dev" target="_blank">
                    {(s ? "" : "👯 ") + "Community"}
                  </a>
                </Menu.List.Item>
              </Menu.List>
            </Menu>
          </Section>
        </Cell>
      </Grid>
    </div >
  );
}

export { Header };
