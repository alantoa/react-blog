import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import style from "./banner.module.scss";
import Container from "@material-ui/core/Container";
import { setSwierHeight } from "redux/action/swiper";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import moment from "moment";

const Banner = (props) => {
  const banner = useRef();
  useEffect(() => {
    let isUnmount = false;      //这里插入isUnmount
    if (!isUnmount) {  //加上判断isUnmount才去更新数据渲染组件
      props.dispatch(setSwierHeight(banner.current.offsetHeight));
    }
    return () => isUnmount = true; 
    
  }, [props]);
  return (
    <>
      <div
        className={clsx(style.cover, style.bgCover)}
        ref={banner}
        style={{
          backgroundImage: `url(${
            props.cover ? props.cover : require("assets/image/swiper/0.jpg")
          })`,
        }}
      >
        <Container className={style.container} maxWidth="md">
          <div className={style.tags}>
            {props.tag &&
              props.tag.map((item, index) => {
                return (
                  <Button key={index} className={style.tag} variant="outlined">
                    {item}
                  </Button>
                );
              })}
          </div>
          <h2 className={style.title}>
            {props.title ? props.title : "Toa Blog"}
          </h2>
          <h4 className={style.subTitle}>
            {props.engTitle ? props.engTitle : "Toa Blog Acticle English Title"}
          </h4>
          <p className={style.time}>
            Posted by Toa on {moment(props.releaseTime).format("dd MM, YYYY")}
          </p>
        </Container>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  height: state,
});
export default connect(mapStateToProps)(Banner);
