import h from "react-hyperscript";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
// 检查状态码
function checkStatus(res) {
  // 结束
  if (res.status === 200 || res.status === 304) {
    return res.json();
  }
  return {
    code: 0,
    msg: res.data.msg || res.statusText,
    data: res.statusText,
  };
}

function setNotification(msg) {
  let id = Math.random();
  global.$addMySnackbar(
    {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center",
      },
      autoHideDuration: 3000,
      message: msg,
      action: [
        h(
          IconButton,
          {
            key: "any",
            color: "inherit",
            onClick: () => {
              global.$closeMySnackBar(id);
            },
          },
          h(CloseIcon)
        ),
      ],
    },
    id
  );
}
// 检查CODE值
function checkCode(resData) {
  if (resData.code === 0) {
    setNotification(resData.msg);
  }

  return resData;
}

export function GET(url, data) {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(checkStatus)
    .then((resJson) => {
      return checkCode(resJson);
    })
    .catch((err) => setNotification(err));
}
// post方式
export function POST(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(checkStatus)
    .then((resJson) => {
      return checkCode(resJson);
    })
    .catch((err) => setNotification(err));
}

//put 修改
export function PUT(url, data) {
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(checkStatus)
    .then((resJson) => {
      return checkCode(resJson);
    })
    .catch((err) => setNotification(err));
}

//delete
export function DEL(url, data) {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(checkStatus)
    .then((resJson) => {
      return checkCode(resJson);
    })
    .catch((err) => setNotification(err));
}
