import React from 'react'
import style from "./Loading.module.scss"
import clsx from "clsx";
export default function LoadingComponent(isLoading, error) {
  // Handle the loading state
  if (isLoading) {
    return (
      <div className={style.background}>
        <div className={style.loader}>
          <div className={clsx(style.inner, style.one)} />
          <div className={clsx(style.inner, style.two)} />
          <div className={clsx(style.inner, style.three)} />
        </div>
      </div>
    )
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  } else {
    return null
  }
}
