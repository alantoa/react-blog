import React from 'react'
import './login.scss'

export default function Login(props) {
  const [state, setState] = React.useState({
    rippleShow: true,
    animating: false,
    success: false,
    inactive: false,
    showLogin: true,
    top:'0px',
    left:'0px'

  });
  let submitPhase1 = 1100,
    submitPhase2 = 400;
  function ripple(elem, e) {
    let elTop = elem.offsetTop,
       elLeft = elem.offsetLeft;
    setState({ 
      rippleShow: false ,
      top: e.pageX - elLeft,
      left: e.pageY - elTop
    });
    console.log(state)
    setState({ rippleShow: true });
  };
  function loginSubmit(e) {
    if (state.animating) return;
    e.persist()
    console.log(e)
    
    setState({ animating: true });
    // console.log(animating)
    ripple(e.target, e);
    setTimeout(function () {
      setState({ success: true });
      setTimeout(function () {

      }, submitPhase2 - 70);
      
      setTimeout(function () {
        setState({ inactive: true });
        setState({ animating: false });
        setState({ success: false });
        setState({ processing: false });
      }, submitPhase2);
    }, submitPhase1);

    console.log(ripple)
  }
  return (
    <div className="cont">
      <div className="demo">
        <div className="login">
          <div className="login__check" />
          <div className="login__form">
            <div className="login__row">
              <svg className="login__icon name svg-icon" viewBox="0 0 20 20">
                <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
              </svg>
              <input type="text" className="login__input name" placeholder="Username" />
            </div>
            <div className="login__row">
              <svg className="login__icon pass svg-icon" viewBox="0 0 20 20">
                <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
              </svg>
              <input type="password" className="login__input pass" placeholder="Password" />
            </div>
            <button type="button" onClick={loginSubmit.bind(this)} className={`login__submit ${state.animating ? 'processing' : ''} ${state.success ? 'success' : ''} ${state.inactive ? 'inactive' : ''}`}>
              Sign in
              {state.rippleShow ? <div className='ripple' style={{top:state.top,left:state.left}}></div> : ''}
            </button>


            <p className="login__signup">Don't have an account? &nbsp;<a href='javascript()'>Sign up</a></p>
          </div>
        </div>
      </div>
    </div>

  )
}
// var animating = false,
//       submitPhase1 = 1100,
//       submitPhase2 = 400,
//       logoutPhase1 = 800,
//       $login = $(".login"),
//       $app = $(".app");

//   function ripple(elem, e) {
//     $(".ripple").remove();
//     var elTop = elem.offset().top,
//         elLeft = elem.offset().left,
//         x = e.pageX - elLeft,
//         y = e.pageY - elTop;
//     var $ripple = $("<div class='ripple'></div>");
//     $ripple.css({top: y, left: x});
//     elem.append($ripple);
//   };

//   $(document).on("click", ".login__submit", function(e) {
//     if (animating) return;
//     animating = true;
//     var that = this;
//     ripple($(that), e);
//     $(that).addClass("processing");
//     setTimeout(function() {
//       $(that).addClass("success");
//       setTimeout(function() {
//         $app.show();
//         $app.css("top");
//         $app.addClass("active");
//       }, submitPhase2 - 70);
//       setTimeout(function() {
//         $login.hide();
//         $login.addClass("inactive");
//         animating = false;
//         $(that).removeClass("success processing");
//       }, submitPhase2);
//     }, submitPhase1);
//   });