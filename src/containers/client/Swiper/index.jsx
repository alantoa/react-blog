import React from "react";
import Swiper from "react-id-swiper";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "assets/style/swiper.css";
import style from "./swiperCustom.module.scss";
import Container from '@material-ui/core/Container';
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
console.log(itemData);
const SwiperSlide = () => {
  const params = {
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
      <div className={clsx("swiper-button-prev",style.prev)}>
        <IconButton
          className={clsx(style.swiperBtn)}
        >
          <ChevronLeftIcon fontSize="large" />
        </IconButton>
      </div>
    ),
    renderNextButton: () => (
      <div className={clsx("swiper-button-next", style.next)}>
        <IconButton
          className={clsx( style.swiperBtn)}
        >
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </div>
    ),
    spaceBetween: 0,
  };

  return (
    <>
      <Swiper {...params}>
        {itemData.map((item) => {
          return (
            <div
              className={clsx(style.cover,style.bgCover)}
              key={item.id}
              style={{ backgroundImage: `url(${item.cover})` }}
            > 
            <Container className={style.container} maxWidth="md">
            <h2 className={style.title}>{item.title}</h2>
              <h5 className={style.desc}>{item.desc}</h5>
            </Container>
              
            </div>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperSlide;
