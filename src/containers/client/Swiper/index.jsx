import React, { useRef, useEffect } from "react";
import Swiper from "react-id-swiper";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "assets/style/swiper.css";
import style from "./swiperCustom.module.scss";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typed from "typed.js";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { setSwierHeight } from "redux/action/swiper";
import { connect } from "react-redux";

const itemData = [
  {
    cover: require("assets/image/swiper/0.jpg"),
    title: "Fenix — 比 MyBatis 更加强大的 Spring Data JPA 扩展库",
    desc:
      "Fenix（菲尼克斯）是一个比 MyBatis 更加强大，为解决复杂、动态 SQL (JPQL) 而生的 Spring Data JPA 扩展库，目的是辅助开发者更方便、快捷的书写复杂、动态且易于维护的 SQL，支持 XML 和 Java",
    id: 1,
  },
  {
    cover: require("assets/image/swiper/1.jpg"),
    title: "Fenix — 比 MyBatis 更加强大的 Spring Data JPA 扩展库",
    desc:
      "Fenix（菲尼克斯）是一个比 MyBatis 更加强大，为解决复杂、动态 SQL (JPQL) 而生的 Spring Data JPA 扩展库，目的是辅助开发者更方便、快捷的书写复杂、动态且易于维护的 SQL，支持 XML 和 Java",
    id: 2,
  },
  {
    cover: require("assets/image/swiper/2.jpg"),
    title: "Fenix — 比 MyBatis 更加强大的 Spring Data JPA 扩展库",
    desc:
      "Fenix（菲尼克斯）是一个比 MyBatis 更加强大，为解决复杂、动态 SQL (JPQL) 而生的 Spring Data JPA 扩展库，目的是辅助开发者更方便、快捷的书写复杂、动态且易于维护的 SQL，支持 XML 和 Java",
    id: 3,
  },
  {
    cover: require("assets/image/swiper/3.jpg"),
    title: "Fenix — 比 MyBatis 更加强大的 Spring Data JPA 扩展库",
    desc:
      "Fenix（菲尼克斯）是一个比 MyBatis 更加强大，为解决复杂、动态 SQL (JPQL) 而生的 Spring Data JPA 扩展库，目的是辅助开发者更方便、快捷的书写复杂、动态且易于维护的 SQL，支持 XML 和 Java",
    id: 4,
  },
];
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
  grabCursor: true,
  noSwipingSelector: "button",
  touchStartForcePreventDefault: true,
  touchMoveStopPropagation: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: false,
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
  
  useEffect(() => {
    new Typed(typedText.current, typedOption);
    props.dispatch(setSwierHeight(swiperRef.current.offsetHeight));
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
      <Swiper {...swiperParams}>
        <div
          className={clsx(style.cover, style.bgCover)}
          key={0}
          style={{
            backgroundImage: `url(${require("assets/image/swiper/0.jpg")})`,
          }}
        >
          <Container className={style.container} maxWidth="md">
            <h2 className={style.title}>Toa Blog</h2>
            <h5 className={style.desc}>
              <span style={{ whiteSpace: "pre" }} ref={typedText}></span>
            </h5>
            <div className={style.operate}>
              <Button
                className={style.moreBtn}
                onClick={startRead}
                variant="outlined"
              >
                <DoubleArrowIcon style={{ transform: "rotate(90deg)" }} />
                开始阅读
              </Button>
            </div>
          </Container>
        </div>
        {itemData.map((item) => {
          return (
            <div
              className={clsx(style.cover, style.bgCover)}
              key={item.id}
              style={{ backgroundImage: `url(${item.cover})` }}
            >
              <Container className={style.container} maxWidth="md">
                <h2 className={style.title}>{item.title}</h2>
                <h5 className={style.desc}>{item.desc}</h5>
                <div className={style.operate}>
                  <Button className={style.moreBtn} variant="outlined">
                    <VisibilityIcon />
                    阅读更多
                  </Button>
                </div>
              </Container>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default connect()(SwiperSlide);
