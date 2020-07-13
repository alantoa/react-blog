import React, { useRef, useEffect } from "react";
import "assets/style/swiper.css";
import style from "./firstBanner.module.scss";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import Typed from "typed.js";
import { connect } from "react-redux";
import { setSwierHeight } from "redux/action/swiper";


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
const FirstBanner = (props) => {
  const typedText = useRef();
  const swiperRef = useRef();
  useEffect(() => {
    new Typed(typedText.current, typedOption);
    props.dispatch(setSwierHeight(swiperRef.current.offsetHeight));
  }, [props]);
  return (
    <div
      ref={swiperRef}
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
      </Container>
    </div>
  );
};

export default connect()(FirstBanner);
