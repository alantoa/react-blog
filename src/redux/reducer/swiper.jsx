import {SWIPER_HEIGHT} from '../actionTypes'


  export const swiper = (state = 0, action) => {
    switch (action.type) {
      case SWIPER_HEIGHT:
       return state = action.height
      default:
        return state
    }
  }
  