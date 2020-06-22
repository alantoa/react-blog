import h from "react-hyperscript";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function setNotification(msg) {
    if(!msg) return
    let id = Math.random();
    if(!global.$addMySnackbar) return
    global.$addMySnackbar(
      {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
        autoHideDuration: 2000,
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