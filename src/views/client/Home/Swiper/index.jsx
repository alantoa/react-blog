import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "assets/style/swiper.css";
import style from "./swiperCustom.module.scss";
import Swiper from "react-id-swiper";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typed from "typed.js";
import { setSwierHeight } from "redux/action/swiper";
import { connect } from "react-redux";
// icon
import Icon from "components/SvgIcon";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GitHubIcon from "@material-ui/icons/GitHub";
import DraftsIcon from "@material-ui/icons/Drafts";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
// api
import { getSwiper } from "api/client/article";
var typedOption = {
  strings: [
    "How long will you lie there, O sluggard?When will you arise from your sleep?",
    "For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory",
  ],
  startDelay: 300,
  typeSpeed: 50,
  loop: true,
  backSpeed: 50,
  showCursor: true,
};
const swiperParams = {
  loop: true,
  noSwipingSelector: "button",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  renderPrevButton: () => (
    <div className={clsx("swiper-button-prev", style.prev)}>
      <IconButton className={clsx(style.swiperBtn)}>
        <ChevronLeftIcon fontSize="large" />
      </IconButton>
    </div>
  ),
  renderNextButton: () => (
    <div className={clsx("swiper-button-next", style.next)}>
      <IconButton className={clsx(style.swiperBtn)}>
        <ChevronRightIcon fontSize="large" />
      </IconButton>
    </div>
  ),
  spaceBetween: 0,
};
const SwiperSlide = (props) => {
  const typedText = useRef();
  const swiperRef = useRef();
  const [swiperData, setSwiperData] = useState([]);

  useEffect(() => {
    let isUnmount = false;

    getSwiper().then((res) => {
      if (res && !isUnmount && res.code === 1) {
        setSwiperData(res.data);
        new Typed(typedText.current, typedOption);
        props.dispatch(setSwierHeight(swiperRef.current.offsetHeight));
      }
    });
    return () => (isUnmount = true);
  }, [props]);
  const startRead = () => {
    swiperRef.current &&
      window.scrollTo({
        top: swiperRef.current.offsetHeight - 60,
        behavior: "smooth",
      });
  };

  return (
    <div ref={swiperRef} className={style.swiperContainer}>
      {swiperData.length > 0 ? (
        <Swiper {...swiperParams}>
          <div
            className={clsx(style.cover, style.bgCover)}
            key={0}
            style={{
              backgroundImage: `url(${require("assets/image/swiper/0.jpg")})`,
            }}
          >
            <Container className={style.container} maxWidth="md">
              <h2 className={clsx(style.title, style.indexTitle)}>Toa Blog</h2>
              <h5 className={clsx(style.desc, style.indexDesc)}>
                <span ref={typedText}></span>
              </h5>
              <div className={style.operate}>
                <Button
                  className={style.moreBtn}
                  onClick={startRead}
                  variant="outlined"
                >
                  <Icon use="angleDoubleBottom" className={style.startRead} />
                  开始阅读
                </Button>
              </div>
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
            </Container>
          </div>
          {swiperData.map((item) => {
            return (
              <div
                className={clsx(style.cover, style.bgCover)}
                key={item._id}
                style={{ backgroundImage: `url(${item.cover})` }}
              >
                <Container className={style.container} maxWidth="md">
                  <h2 className={style.title}>{item.title}</h2>
                  <h5 className={style.desc}>{item.desc}</h5>
                  <div className={style.operate}>
                    <Link to={"/detail/" + item._id}>
                      <Button className={style.moreBtn} variant="outlined">
                        <VisibilityIcon />
                        阅读更多
                      </Button>
                    </Link>
                  </div>
                </Container>
              </div>
            );
          })}
        </Swiper>
      ) : (
        <div
          className={clsx(style.cover, style.bgCover)}
          key={0}
          style={{
            backgroundImage: `url(${require("assets/image/swiper/0.jpg")})`,
          }}
        >
          <Container className={style.container} maxWidth="md">
            <h2 className={clsx(style.title, style.indexTitle)}>Toa Blog</h2>
            <h5 className={clsx(style.desc, style.indexDesc)}>
              <span ref={typedText}></span>
            </h5>
            <div className={style.operate}>
              <Button
                className={style.moreBtn}
                onClick={startRead}
                variant="outlined"
              >
                <Icon use="angleDoubleBottom" className={style.startRead} />
                开始阅读
              </Button>
            </div>
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
          </Container>
        </div>
      )}
    </div>
  );
};

export default connect()(SwiperSlide);
