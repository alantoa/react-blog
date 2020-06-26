import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import style from "./banner.module.scss";
import Container from "@material-ui/core/Container";
import { setSwierHeight } from "redux/action/swiper";
import { connect } from "react-redux";

const Banner = (props) => {
  const banner = useRef();

  useEffect(() => {
    props.dispatch(setSwierHeight(banner.current.offsetHeight));
  }, [props]);
  return (
    <>
      <div
        className={clsx(style.cover, style.bgCover)}
        ref={banner}
        style={{
          backgroundImage: `url(${require("assets/image/swiper/0.jpg")})`,
        }}
      >
        <Container className={style.container} maxWidth="md">
          <h2 className={style.title}>Toa Blog</h2>
        </Container>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  height: state,
});
export default connect(mapStateToProps)(Banner);
