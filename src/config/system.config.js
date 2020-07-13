import AppsIcon from "@material-ui/icons/Apps";
import { ReactComponent as T } from "assets/image/T.svg";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

// 前台菜单
export const menu = [
  {
    path: "/",
    name: "Home",
    icon: AppsIcon,
  },
  {
    path: "/about",
    name: "About",
    icon: T,
  },
  {
    path: "/archive",
    name: "Archive",
    icon: FormatListBulletedIcon,
  },
];
