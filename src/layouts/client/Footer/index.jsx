import React from "react";
import style from "./footer.module.scss";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import DraftsIcon from "@material-ui/icons/Drafts";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <div className={style.footer}>
      <Container>
        <div className={style.link}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            href="https://github.com/monsteranan"
          >
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
            href="mailto:toacncom@gmail.com"
          >
            <IconButton>
              <DraftsIcon />
            </IconButton>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            href="https://twitter.com/Toa_anan"
          >
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            href="https://www.instagram.com/thealantoa/"
          >
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </a>
        </div>
        <div className={style.copyright}>Copyright © Toa Blog 2020</div>

        <div className={style.power}>
          <span className={style.author}>
            <a href="/admin" target="_blank" rel="noopener noreferrer">Powered</a> by <Link to='/'>Toa</Link>
          </span>
          <span className={style.split}>|</span>
          {/* <iframe
            src="https://ghbtns.com/github-btn.html?user=MonsterAnan&repo=react-blog&type=star&count=true"
            frameBorder="0"
            scrolling="0"
            width="150"
            height="20"
            title="GitHub"
          ></iframe> */}
        </div>
        <div className={style.tip}>♥ God resisteth the proud, but giveth grace to the humble.</div>
      </Container>
    </div>
  );
}
