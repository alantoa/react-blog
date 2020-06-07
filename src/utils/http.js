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
    msg: res.json().data.msg || res.json().statusText,
    data: res.json().statusText,
  };
}

// 检查CODE值
function checkCode(res) {
  if (res.code === 0) {
    let id = Math.random();
    global.$addMySnackbar(
      {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
        autoHideDuration: 3000,
        message: res.msg,
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
    throw new Error(res.msg)
  }

  return res;
}

export function GET(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(checkStatus)
      .then(checkCode)
      .catch((err) => reject(err));
  });
}
// post方式
export function POST(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(checkStatus)
      .then(checkCode)
      .catch((err) => reject(err));
  });
}

//put 修改
export function PUT(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(checkStatus)
      .then(checkCode)
      .catch((err) => reject(err));
  });
}

//delete
export function DEL(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(checkStatus)
      .then(checkCode)
      .catch((err) => reject(err));
  });
}
