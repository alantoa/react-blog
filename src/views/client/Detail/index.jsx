import React from "react";
import style from './detail.module.scss'
import Card from "components/Card";

export default function Detail (props) {
  console.log(props.match.params)
    return (
      <>
         <div className={style.content}>
           <Card>123 </Card>
         </div>
         <div className={style.catalog}>
           
         </div>
      </>
    )
}
